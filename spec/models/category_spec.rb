require 'rails_helper'

RSpec.describe Category, :type => :model do
  it "is not valid without a name" do
    category = Category.create(name: nil)
    expect(category).to_not be_valid
    expect(category.errors.messages).to eq(:name=>["can't be blank"])
  end

  it "has a unique name" do
    category1 = Category.create(name: "Old-Fashioned")
    category2 = Category.create(name: "Old-Fashioned")

    expect(category2.errors.messages).to eq(:name=>["has already been taken"])
  end
end
