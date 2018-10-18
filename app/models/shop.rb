class Shop < ApplicationRecord
  validates :name, :address, :city, :state, presence: true
  has_many :donuts
  has_many :reviews, through: :donuts
end
