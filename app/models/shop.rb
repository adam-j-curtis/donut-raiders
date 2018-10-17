class Shop < ApplicationRecord
  validates :name, :address, :city, :state, presence: true
  has_many :donuts
end
