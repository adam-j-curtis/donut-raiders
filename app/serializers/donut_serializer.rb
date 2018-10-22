class DonutSerializer < ActiveModel::Serializer
  attributes :id, :name, :reviews, :shop

  private

  def reviews
    ReviewSerializer.new(object.review).attributes
  end

  def shop
    ShopSerializer.new(object.shop).attributes
  end

end
