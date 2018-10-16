class Shop < ApplicationRecord
  has_many :donuts
  has_many :reviews, through :donuts

  validates :name, :address, :city, :state, presence: true
end
