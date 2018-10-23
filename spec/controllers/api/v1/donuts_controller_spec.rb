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

  # describe "POST#create" do
  #   let!(:new_donut) { FactoryBot.create(:donut, name: "Boston Cream") }
  #   let!(:donut_data) { { name: new_donut.name, shop_id: new_donut.shop_id }.to_json }
  #
  #   it "should create a new donut" do
  #     expect{ post(:create, body: donut_data) }.to change{ Donut.count }.by 1
  #   end
  #
  #   it "should return a json with the new donut data" do
  #     post(:create, body: donut_data)
  #     returned_json = JSON.parse(response.body)
  #
  #     expect(response.status).to eq 200
  #     expect(response.content_type).to eq "application/json"
  #
  #     expect(returned_json.length).to eq 1
  #     expect(returned_json["donut"]["name"]).to eq new_donut.name
  #     expect(returned_json["donut"]["shop_id"]).to eq new_donut.shop_id
  #
  #   end
  # end
end
