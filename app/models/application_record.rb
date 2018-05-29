class ApplicationRecord < ActiveRecord::Base
	include ActiveRecord::Inheritance
	include PersistenceLocal
  self.abstract_class = true
end
