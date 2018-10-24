require 'rails_helper'

RSpec.describe Api::V1::DonutsController, type: :controller do

  let!(:honeydew) { Shop.create(name:"Honeydew Donuts", address:"12 Main St.", city: "Manchester", state: "NH", url: "www.honeydewisgood.com", phone: "781-111-1111") }

  let!(:boston_common_coffee) { Shop.create(name:"Boston Common Coffee", address:"77 Summer Street", city: "Boston", state: "MA", url: "www.bostoncommoncoffee.com", phone: "781-854-1111") }

  let!(:seasonal) { Category.create(name:"Seasonal") }

  let!(:double_chocolate) { Donut.create!(name: "Double Chocolate Chunk", shop: honeydew, category: seasonal) }

  let!(:jelly) { Donut.create!(name: "Jelly", shop: honeydew, category: seasonal) }

  let!(:glazed) { Donut.create!(name: "Glazed", shop: honeydew, category: seasonal) }

  let!(:review1) { Review.create!(rating: 3, shop: honeydew, donut: jelly, price_range: "cheap", body: "this is very fine.") }

  let!(:review2) { Review.create!(rating: 5, shop: honeydew, donut: glazed, price_range: "pricey", body: "exquisite donutry.") }


  describe "GET#index" do
    it "should return a list of all the donuts that belong to a shop" do

    get "/shops/#{honeydew.id}/donuts"
    # visit api_v1_shop_donut_path(honeydew.id)

      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type). to eq ("application/json")

      expect(returned_json["donuts"].length).to eq 3
      binding.pry

      expect(returned_json["donuts"])
      # test that two donuts and their attributes appear in the json

    end
  end

    # show test path
    # get "/shops/#{honeydew.id}/donuts/#{glazed.id}"


  # Need a show test here"
  # - Need to test response status, & type
  # - test that the shop name is present in the json
  # - need to test that a specific donuts info appears in the json
  # - test that the donuts shop appears in the json
  # - test that the donuts reviews appear in the json
end
