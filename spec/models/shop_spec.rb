require 'rails_helper'
require_relative "../../app/models/shop.rb"

RSpec.describe Shop, :type => :model do
  it "is not valid without a name" do
    shop = Shop.create(name: nil, address: "3 Main St.", city: "Boston", state: "MA", url: "www.www.com", phone: "617-867-5309")

    expect(shop).to_not be_valid
    expect(shop.errors.messages).to eq(:name=>["can't be blank"])
  end

  it "is not valid without an address" do
    shop = Shop.create(name: "Dunkin", address: nil, city: "Boston", state: "MA", url: "www.www.com", phone: "617-867-5309")

    expect(shop).to_not be_valid
    expect(shop.errors.messages).to eq(:address=>["can't be blank"])
  end

  it "is not valid without a city" do
    shop = Shop.create(name: "Dunkin", address: "3 Main St.", city: nil, state: "MA", url: "www.www.com", phone: "617-867-5309")

    expect(shop).to_not be_valid
    expect(shop.errors.messages).to eq(:city=>["can't be blank"])
  end

  it "is not valid without a state" do
    shop = Shop.create(name: "Dunkin", address: "3 Main St.", city: "Boston", state: nil, url: "www.www.com", phone: "617-867-5309")

    expect(shop).to_not be_valid
    expect(shop.errors.messages).to eq(:state=>["can't be blank"])
  end

  it "is valid without a url" do

    shop = Shop.create(name: "Dunkins", address: "3 Main St.", city: "Boston", state: "MA", url: nil, phone: "617-867-5309")

    expect(shop).to be_valid
    expect(shop.errors.messages).to eq({})
  end

  it "is valid without a phone number" do

    shop = Shop.create(name: "Dunkins", address: "3 Main St.", city: "Boston", state: "MA", url: "www.www.com", phone: nil)

    expect(shop).to be_valid
    expect(shop.errors.messages).to eq({})
  end



end
