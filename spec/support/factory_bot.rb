require 'factory_bot'

FactoryBot.define do
  factory :user do
    first_name {'Willie'}
    last_name { 'Wonker'}
    user_name { 'GoldenTicket'}
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

end
