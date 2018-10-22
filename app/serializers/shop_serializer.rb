class ShopSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :url, :phone

  has_many :donuts
  has_many :reviews
end
