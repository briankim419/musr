require 'rails_helper'

RSpec.describe Api::V1::GenresController, type: :controller do

  before(:each) do
    FactoryBot.create(:genre, name: "Rock")
    create(:genre, name: "Classical")

  end

  describe "GET#index" do
    it "should return a list of all genres" do
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(returned_json.length).to eq 1

      expect(returned_json["genres"][0]["name"]).to eq "Rock"
      expect(returned_json["genres"][1]["name"]).to eq "Classical"
    end
  end

  describe "GET#show" do
    it "should return a Genre" do
      get :show, params: {id: Genre.first.id}
      returned_json = JSON.parse(response.body)
      new_json = {genre: returned_json}

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(new_json.length).to eq 1

      expect(new_json[:genre]["name"]).to eq "Rock"
    end
  end
end
