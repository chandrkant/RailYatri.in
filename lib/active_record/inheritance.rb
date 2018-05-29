# frozen_string_literal: true

require "active_support/core_ext/hash/indifferent_access"

module ActiveRecord
  # == Single table inheritance
  #
  # Active Record allows inheritance by storing the name of the class in a column that by
  # default is named "type" (can be changed by overwriting <tt>Base.inheritance_column</tt>).
  # This means that an inheritance looking like this:
  #
  #   class Company < ActiveRecord::Base; end
  #   class Firm < Company; end
  #   class Client < Company; end
  #   class PriorityClient < Client; end
  #
  # When you do <tt>Firm.create(name: "37signals")</tt>, this record will be saved in
  # the companies table with type = "Firm". You can then fetch this row again using
  # <tt>Company.where(name: '37signals').first</tt> and it will return a Firm object.
  #
  # Be aware that because the type column is an attribute on the record every new
  # subclass will instantly be marked as dirty and the type column will be included
  # in the list of changed attributes on the record. This is different from non
  # Single Table Inheritance(STI) classes:
  #
  #   Company.new.changed? # => false
  #   Firm.new.changed?    # => true
  #   Firm.new.changes     # => {"type"=>["","Firm"]}
  #
  # If you don't have a type column defined in your table, single-table inheritance won't
  # be triggered. In that case, it'll work just like normal subclasses with no special magic
  # for differentiating between them or reloading the right type with find.
  #
  # Note, all the attributes for all the cases are kept in the same table. Read more:
  # https://www.martinfowler.com/eaaCatalog/singleTableInheritance.html
  #
  module Inheritance
    extend ActiveSupport::Concern
    module ClassMethods
      # Determines if one of the attributes passed in is the inheritance column,
      # and if the inheritance column is attr accessible, it initializes an
      # instance of the given subclass instead of the base class.
      def new(attributes = nil, options = {}, &block)
        p "***********************************Attributs******************"
        p attributes
        p "*************************************Block*********************"
        p &block
        if abstract_class? || self == Base
          raise NotImplementedError, "#{self} is an abstract class and cannot be instantiated."
        end

        if has_attribute?(inheritance_column)
          subclass = subclass_from_attributes(attributes)

          if subclass.nil? && base_class == self
            subclass = subclass_from_attributes(column_defaults)
          end
        end

        if subclass && subclass != self
          subclass.new(attributes, &block)
        else
          super
        end
      end
    end
  end
end    