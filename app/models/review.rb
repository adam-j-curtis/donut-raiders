class Review < ApplicationRecord
  validates :rating, :body, :price_range, presence: true
  validates :rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5}

  belongs_to :donut
  belongs_to :shop


  # def self.convert_date
  #   object.created_at = object.created_at.strftime("%d %b %y")
  # end
end
