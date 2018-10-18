class Donut < ApplicationRecord
  validates :name, presence: true

  belongs_to :category
  belongs_to :shop
  has_many :reviews
end
