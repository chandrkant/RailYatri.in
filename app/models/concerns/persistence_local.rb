require 'active_support/concern'
module PersistenceLocal
  extend ActiveSupport::Concern
  module ClassMethods
    def create(attributes = nil, options = {}, &block)
      if attributes.is_a?(Array)
        attributes.collect { |attr| create(attr, &block) }
      else
        object = new(attributes, &block)
        object.save
        object
      end
    end
  end
end
