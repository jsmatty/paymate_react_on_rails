class House < ApplicationRecord
  has_many :users, dependent: :destroy
  has_many :bills, dependent: :destroy
end
