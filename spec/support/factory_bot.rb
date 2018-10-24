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

  factory :genre do
    name { 'name' }
  end

  # factory :album do
  #   name { 'Test Album' }
  #   artist { 'Dr. Test' }
  #   description { 'Testing the Test' }
  #   release_date { '04/04/2017' }
  #   genre_id { genre.id }
  #   album_art { 'fakeurl.com' }
  #
  # end
end
