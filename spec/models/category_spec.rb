require 'rails_helper'

RSpec.describe Category, :type => :model do
  it "is not valid without a name" do
    category = Category.new(name: nil)
    expect(category).to_not be_valid
    expect(category.errors.messages).to eq(:name=>["can't be blank"])
  end
end
