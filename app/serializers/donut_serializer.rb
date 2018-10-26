class DonutSerializer < ActiveModel::Serializer
  attributes :id, :name, :reviews, :shop, :category

  private

  has_many :reviews

  def shop
    ShopSerializer.new(object.shop).attributes
  end
end
