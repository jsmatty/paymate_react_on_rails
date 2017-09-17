class User < ApplicationRecord
  belongs_to :house
  has_secure_password
  validates_uniqueness_of :user_name
end
