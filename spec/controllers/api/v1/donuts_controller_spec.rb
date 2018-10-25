require 'rails_helper'

RSpec.describe Api::V1::DonutsController, type: :controller do

  let!(:honeydew) { Shop.create(name:"Honeydew Donuts", address:"12 Main St.", city: "Manchester", state: "NH", url: "www.honeydewisgood.com", phone: "781-111-1111") }

  let!(:boston_common_coffee) { Shop.create(name:"Boston Common Coffee", address:"77 Summer Street", city: "Boston", state: "MA", url: "www.bostoncommoncoffee.com", phone: "781-854-1111") }

  let!(:seasonal) { Category.create(name:"Seasonal") }

  let!(:double_chocolate) { Donut.create!(name: "Double Chocolate Chunk", shop: boston_common_coffee, category: seasonal) }

  let!(:jelly) { Donut.create!(name: "Jelly", shop: honeydew, category: seasonal) }

  let!(:glazed) { Donut.create!(name: "Glazed", shop: honeydew, category: seasonal) }

  let!(:review1) { Review.create!(rating: 3, shop: honeydew, donut: jelly, price_range: "cheap", body: "this is very fine.") }

  let!(:review2) { Review.create!(rating: 5, shop: honeydew, donut: glazed, price_range: "pricey", body: "exquisite donutry.") }


  describe "GET#index" do
    it "should return a list of all the donuts that belong to a shop" do

    get :index, params: {shop_id: honeydew}

      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type). to eq ("application/json")

      expect(returned_json["donuts"].length).to eq 2

      expect(returned_json["donuts"][0]["reviews"][0]["body"]).to eq "this is very fine."
      expect(returned_json["donuts"][0]["reviews"][0]["price_range"]).to eq "cheap"
      expect(returned_json["donuts"][1]["reviews"][0]["body"]).to eq "exquisite donutry."

    end
  end

  describe "GET#show" do
    it "should return a single donut that belongs to a shop" do

    get :show, params: {shop_id: honeydew, id: jelly}

      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type). to eq ("application/json")

      expect(returned_json.length).to eq 1

      expect(returned_json["donut"]["shop"]["name"]).to eq "Honeydew Donuts"

      expect(returned_json["donut"]["name"]).to eq "Jelly"
      expect(returned_json["donut"]["category"]["name"]).to eq "Seasonal"
      expect(returned_json["donut"]["reviews"][0]["body"]).to eq "this is very fine."
    end
  end
end
