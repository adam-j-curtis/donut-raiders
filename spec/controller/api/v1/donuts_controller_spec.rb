require 'rails_helper'

RSpec.describe Api::V1::DonutsController, type: :controller do


  before(:each) do
    honeydew = Shop.create(name:"Honeydew Donuts", address:"12 Main St.", city: "Manchester", state: "NH", url: "www.honeydewisgood.com", phone: "781-111-1111")

    seasonal = Category.create(name:"Seasonal")

    double_chocolate = Donut.create!(name: "Double Chocolate Chunk", shop: honeydew, category: seasonal)
    jelly = Donut.create!(name: "Jelly", shop: honeydew, category: seasonal)
    glazed = Donut.create!(name: "Glazed", shop: honeydew, category: seasonal)
    chocolate_frosted = Donut.create!(name: "Chocolate Frosted", shop: honeydew, category: seasonal)
    french_crueller = Donut.create!(name: "French Crueller", shop: honeydew, category: seasonal)
    strawberry_frosted = Donut.create!(name: "Strawberry Frosted", shop: honeydew, category: seasonal)
  end

  describe "GET#index" do
    it "should return a list of all the donuts" do
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type). to eq "application/json"

      expect(returned_json.length).to eq 1
      expect(returned_json["donuts"].length).to eq 6

      expect(returned_json["donuts"][0]["name"]).to eq "Double Chocolate Chunk"
      expect(returned_json["donuts"][5]["name"]).to eq "Strawberry Frosted"
    end
  end
end
