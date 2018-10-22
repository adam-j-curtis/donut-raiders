class ReviewSerializer < ActiveModel::Serializer
  attributes :rating, :body, :price_range, :photo_url

  belongs_to :donut
  belongs_to :shop
end
