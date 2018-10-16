class Shop < ApplicationRecord
  validates :name, :address, :city, :state, presence: true
  has_many :donuts
end

# To implement after setup steps
# has_many :reviews, through :donuts
