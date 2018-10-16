class Donut < ApplicationRecord
  validates :name, presence: true

  belongs_to :category
end

# To add association to :shop and :reviews.
