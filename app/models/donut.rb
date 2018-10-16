class Donut < ApplicationRecord
  validates :name, presence: true
end

# To add association to :shop and :reviews.
