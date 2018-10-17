class Review < ApplicationRecord
  validates :rating, :body, :price_range, presence: true
  validates :rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5}
end
