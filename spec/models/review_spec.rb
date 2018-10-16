require 'rails_helper'
require_relative "../../app/models/review.rb"

RSpec.describe Review, :type => :model do
  it "is not valid without a rating" do
    review = Review.new(rating: nil, body: "It's a party for the palette", price_range: "$$", photo_url: "pic.u")
    expect(review).to_not be_valid
    expect(review.errors.messages).to eq(:rating=>["can't be blank"])
  end

  it "is not valid without a body" do
    review = Review.new(rating: 5, body: nil, price_range: "$$", photo_url: "pic.u")
    expect(review).to_not be_valid
    expect(review.errors.messages).to eq(:body=>["can't be blank"])
  end

  it "is not valid without a price range" do
    review = Review.new(rating: 5, body: "It's a party for the palette", price_range: nil, photo_url: "pic.u")
    expect(review).to_not be_valid
    expect(review.errors.messages).to eq(:price_range=>["can't be blank"])
  end

  it "is valid without a photo" do
    review = Review.new(rating: 5, body: "It's a party for the palette", price_range: "$$", photo_url: nil)
    expect(review).to be_valid
    expect(review.errors.messages).to eq({})
  end
end
