class Donut < ApplicationRecord
  validates :name, presence: true

  belongs_to :category
  belongs_to :shop
end

# To add association to :shop and :reviews.
