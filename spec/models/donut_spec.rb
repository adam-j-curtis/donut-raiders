require 'rails_helper'

RSpec.describe Donut, :type => :model do
  it "is not valid without a name" do
    donut = Donut.new(name: nil, category_id: 1)
    expect(donut).to_not be_valid
    expect(donut.errors.messages).to eq(:name=>["can't be blank"])
  end

  it "is not valid without a category" do
    donut = Donut.new(name: "Chocolate Glaze", category_id: nil)
    expect(donut).to_not be_valid
    expect(donut.errors.messages).to eq(:category=>["can't be blank"])
  end
end
