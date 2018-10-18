class DonutSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :reviews
  belongs_to :shop
end
