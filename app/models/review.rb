class Review < ApplicationRecord
  PRICE_RANGE = []

  validates :rating, :body, :price_range, presence: true

end
