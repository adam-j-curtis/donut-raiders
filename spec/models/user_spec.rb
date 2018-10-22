require 'rails_helper'
require_relative "../../app/models/user.rb"

RSpec.describe User, :type => :model do

  it "is not valid without a First Name" do
    test_user = User.create(first_name: nil, last_name: "Wonka", email: "BilliamWonka@chocolate.com", user_name: "GoldenTicket", password: "gobstopper")
    expect(test_user).to_not be_valid
    expect(test_user.errors.messages).to eq(:first_name=>["can't be blank"])
  end

  it "is not valid without a Last Name" do
    test_user = User.create(first_name: "Willy", last_name: nil, email: "BilliamWonka@chocolate.com", user_name: "GoldenTicket", password: "gobstopper")
    expect(test_user).to_not be_valid
    expect(test_user.errors.messages).to eq(:last_name=>["can't be blank"])
  end

  it "is not valid without a Email" do
    test_user = User.create(first_name: "Willy", last_name: "Wonka", email: nil, user_name: "GoldenTicket", password: "gobstopper")
    expect(test_user).to_not be_valid
    expect(test_user.errors.messages).to eq(:email=>["can't be blank"])
  end

  it "is not valid without a User Name" do
    test_user = User.create(first_name: "Willy", last_name: "Wonka", email: "BilliamWonka@chocolate.com", user_name: nil, password: "gobstopper")
    expect(test_user).to_not be_valid
    expect(test_user.errors.messages).to eq(:user_name=>["can't be blank"])
  end

  it "is not valid without a Password" do
    test_user = User.create(first_name: "Willy", last_name: "Wonka", email: "BilliamWonka@chocolate.com", user_name: "GoldenTicket", password: nil)
    expect(test_user).to_not be_valid
    expect(test_user.errors.messages).to eq(:password=>["can't be blank"])
  end

  it "is not valid without a Role" do
    test_user = User.create(first_name: "Willy", last_name: "Wonka", email: "BilliamWonka@chocolate.com", user_name: "GoldenTicket", password: "gobstopper", role: nil)
    expect(test_user).to_not be_valid
    expect(test_user.errors.messages).to eq(:role=>["can't be blank", "is not included in the list"])
  end

  it "is valid when a Role equals member" do
    test_user = User.create(first_name: "Willy", last_name: "Wonka", email: "BilliamWonka@chocolate.com", user_name: "GoldenTicket", password: "gobstopper", role: "member")
    expect(test_user).to be_valid
  end

  it "is valid when a Role equals admin" do
    test_user = User.create(first_name: "Willy", last_name: "Wonka", email: "BilliamWonka@chocolate.com", user_name: "GoldenTicket", password: "gobstopper", role: "admin")
    expect(test_user).to be_valid
  end

end
