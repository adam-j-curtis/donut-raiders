class ReviewSerializer < ActiveModel::Serializer
  attributes :rating, :body, :price_range, :photo_url, :date

  belongs_to :donut
  belongs_to :shop

  def date
    timezone = 'Eastern Time (US & Canada)'
    object.created_at.in_time_zone(timezone).strftime("%B %d %y %I:%M%p")
  end
end
