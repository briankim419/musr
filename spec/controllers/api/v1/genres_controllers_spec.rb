require 'rails_helper'

RSpec.describe Api::V1::GenresController, type: :controller do

  before(:each) do
    FactoryBot.create(:genre, name: "Rock")
    create(:genre, name: "Classical")
    create_list(:genre, 5)

  end

  describe "GET#index" do
    it "should return a list of all genres" do
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      # expect(returned_json.length).to eq 1
      expect(returned_json.length).to eq 7

      expect(returned_json[0]["name"]).to eq "Rock"
      expect(returned_json[1]["name"]).to eq "Classical"
    end
  end
end
