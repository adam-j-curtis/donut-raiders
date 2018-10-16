class Shop < ApplicationRecord


  validates :name, :address, :city, :state, presence: true
end

# To implement after setup steps
# has_many :donuts
# has_many :reviews, through :donuts
