require 'rails_helper'

RSpec.describe Api::V1::ShopsController, type: :controller do

    let!(:honeydew) { Shop.create(name:"Honeydew Donuts", address:"12 Main St.", city: "Manchester", state: "NH", url: "www.honeydewisgood.com", phone: "781-111-1111") }

    let!(:boston_common_coffee) { Shop.create(name:"Boston Common Coffee", address:"77 Summer Street", city: "Boston", state: "MA", url: "www.bostoncommoncoffee.com", phone: "781-854-1111") }

    let!(:seasonal) { Category.create(name:"Seasonal") }

    let!(:double_chocolate) { Donut.create!(name: "Double Chocolate Chunk", shop: honeydew, category: seasonal) }

    let!(:jelly) { Donut.create!(name: "Jelly", shop: honeydew, category: seasonal) }

    let!(:glazed) { Donut.create!(name: "Glazed", shop: honeydew, category: seasonal) }

    let!(:review1) { Review.create!(rating: 3, shop: honeydew, donut: jelly, price_range: "cheap", body: "this is very fine.") }

    let!(:review2) { Review.create!(rating: 5, shop: honeydew, donut: glazed, price_range: "pricey", body: "exquisite donutry.") }

  describe "GET#index" do
    it "should return a list of all the shops" do
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type). to eq "application/json"

      expect(returned_json["shops"].length).to eq 2

      expect(returned_json["shops"][0]["name"]).to eq "Honeydew Donuts"
      expect(returned_json["shops"][1]["name"]).to eq "Boston Common Coffee"
    end
  end

  describe "GET#show" do
    it "should return a shop show page" do
      get :index, body: honeydew
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type). to eq "application/json"

      expect(returned_json["shops"][0]["name"]).to eq "Honeydew Donuts"
      expect(returned_json["shops"][0]["donuts"][0]["name"]).to eq "Double Chocolate Chunk"
      expect(returned_json["shops"][0]["donuts"][1]["name"]).to eq "Jelly"
      expect(returned_json["shops"][0]["donuts"][2]["name"]).to eq "Glazed"

      expect(returned_json["shops"][0]["reviews"][0]["body"]).to eq "this is very fine."
      expect(returned_json["shops"][0]["reviews"][1]["rating"]).to eq 5
    end
  end
end
