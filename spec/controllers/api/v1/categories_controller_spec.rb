require 'rails_helper'

RSpec.describe Api::V1::CategoriesController, type: :controller do


  before(:each) do
    seasonal = Category.create(name:"Seasonal")
    traditional = Category.create(name:"Traditional")
    filled = Category.create(name:"Filled")

  end

  describe "GET#index" do
    it "should return a list of all the categories" do
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type). to eq "application/json"

      expect(returned_json.length).to eq 3

      expect(returned_json[0]["name"]).to eq "Seasonal"
      expect(returned_json[2]["name"]).to eq "Filled"
    end
  end
end
