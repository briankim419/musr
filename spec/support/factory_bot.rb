require 'factory_bot'

FactoryBot.define do
  factory :user do

    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
    first_name { 'First Name' }
    last_name { 'Last Name' }
    sequence(:user_name) { |n| "Random Name #{n}" }
  end

end
