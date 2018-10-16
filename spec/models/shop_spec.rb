require 'rails_helper'
require_relative "../../app//models/shop.rb"

RSpec.describe Shop, :type => :model do
  it "is not valid without a name, address, city, state" do
    shop = Shop.new(name: nil, address: nil, city: nil, state: nil, url: nil, phone: nil)
    expect(shop).to_not be_valid
    expect(shop.errors.messages).to eq(:address=>["can't be blank"], :city=>["can't be blank"], :name=>["can't be blank"], :state=>["can't be blank"])
  end
  it "is valid without a url or phone number" do
    shop = Shop.new(name: "Dunkins", address: "3 Main St.", city: "Boston", state: "MA", url: nil, phone: nil)
    expect(shop).to be_valid
    expect(shop.errors.messages).to eq({})
  end
end
