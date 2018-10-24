require 'rails_helper'

RSpec.describe Api::V1::DonutsController, type: :controller do


  before(:each) do
    create(:donut, name: "Double Chocolate Chunk")
    create_list(:donut, 5)
    create(:donut, name: "Strawberry Frosted")
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
