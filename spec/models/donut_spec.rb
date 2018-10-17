require 'rails_helper'

RSpec.describe Donut, :type => :model do
  it "is not valid without a name" do
    donut = Donut.create(name: nil, category_id: 1, shop_id: 3)
    expect(donut).to_not be_valid
    expect(donut.errors.messages).to eq(:category=>["must exist"], :name=>["can't be blank"], :shop=>["must exist"])
  end

  it "is not valid without a category" do
    donut = Donut.create(name: "Chocolate Glaze", category_id: nil, shop_id: 3)
    expect(donut).to_not be_valid
    expect(donut.errors.messages).to eq(:category=>["must exist"], :shop=>["must exist"])
  end

  it "is not valid without a shop" do
    donut = Donut.create(name: "Chocolate Glaze", category_id: 1, shop_id: nil)
    expect(donut).to_not be_valid
    expect(donut.errors.messages).to eq(:category=>["must exist"], :shop=>["must exist"])
  end
end
