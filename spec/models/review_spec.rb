require 'rails_helper'

RSpec.describe Review, :type => :model do

  honeydew = Shop.create(name:"Honeydew Donuts", address:"12 Main St.", city: "Manchester", state: "NH", url: "www.honeydewisgood.com", phone: "781-111-1111")

  seasonal = Category.create(name:"Seasonal")

  apple_cider = Donut.create(name: "Apple Cider Donut", shop: honeydew, category: seasonal)

  it "is not valid without a rating" do
    review_1 = Review.create(rating: nil, body: "It's a party for the palette", price_range: "$$", photo_url: "pic.u", shop: honeydew, donut: apple_cider)
    expect(review_1).to_not be_valid
    expect(review_1.errors.messages).to eq(:rating=>["can't be blank", "is not a number"])
  end

  it "is not valid without a body" do
    review_2 = Review.create(rating: 5, body: nil, price_range: "$$", photo_url: "pic.u", shop: honeydew, donut: apple_cider)
    expect(review_2).to_not be_valid
    expect(review_2.errors.messages).to eq(:body=>["can't be blank"])
  end

  it "is not valid without a price range" do
    review_3 = Review.create(rating: 5, body: "It's a party for the palette", price_range: nil, photo_url: "pic.u", shop: honeydew, donut: apple_cider)
    expect(review_3).to_not be_valid
    expect(review_3.errors.messages).to eq(:price_range=>["can't be blank"])
  end

  it "is valid without a photo" do
    review_4 = Review.create(rating: 5, body: "It's a party for the palette", price_range: "$$", photo_url: nil, shop: honeydew, donut: apple_cider)
    expect(review_4).to be_valid
    expect(review_4.errors.messages).to eq({})
  end

  it "has a rating that is a number" do
    review_5 = Review.create(rating: 4, body: "It's a party for the palette", price_range: "$$", photo_url: nil, shop: honeydew, donut: apple_cider)
    expect(review_5.rating).to be_an(Integer)
    expect(review_5.rating).to be <= 5
    expect(review_5.rating).to be >= 0

  end
end
