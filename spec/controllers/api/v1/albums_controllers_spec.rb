require 'rails_helper'

RSpec.describe Api::V1::AlbumsController, type: :controller do

  before(:each) do
    FactoryBot.create(:genre, name: "Rock")

  end
  let!(:first_album) { Album.create(name: "Suncity EP", artist: "Khalid", description: "description", release_date: "10/05/2018", genre_id: Genre.first.id, album_art: "https://albumart.com") }

  describe "GET#index" do
    it "should return a list of albums for one genre" do

      get :index, params: { genre_id: Genre.first.id }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(returned_json.length).to eq 1

      expect(returned_json["albums"][0]["name"]).to eq "Suncity EP"
      expect(returned_json["albums"][0]["artist"]).to eq "Khalid"
      expect(returned_json["albums"][0]["description"]).to eq "description"
      expect(returned_json["albums"][0]["release_date"]).to eq "2018-05-10"
      expect(returned_json["albums"][0]["genre_id"]).to eq Genre.first.id
      expect(returned_json["albums"][0]["album_art"]).to eq "https://albumart.com"
    end
  end

  describe "GET#show" do
    it "should return a single album" do

      get :show, params: { genre_id: Genre.first.id, id: Album.first.id }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(returned_json.length).to eq 1

      expect(returned_json["album"]["name"]).to eq "Suncity EP"


    end
  end

  describe "GET#new" do
    it "should return a new album" do

      get :new, params: { genre_id: Genre.first.id }

      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(returned_json.length).to eq 1

    end
  end

  describe "POST#create" do
    it "creates a new album" do
      post_json = { name: "Suncity EP", artist: "Khalid", description: "description", release_date: "10/05/2018", genre_id: Genre.first.id, album_art: "album_art.jpg" }.to_json
      prev_count = Album.count
      post(:create, body: post_json)
      expect(Album.count).to eq(prev_count + 1)
    end

    it "returns the json of the newly posted album" do
      post_json = { name: "Suncity EP", artist: "Khalid", description: "description", release_date: "10/05/2018", genre_id: Genre.first.id, album_art: "album_art.jpg" }.to_json
      post(:create, body: post_json)
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      # expect(returned_json["name"]).to eq "Basset Hound Shakes Off"
    end
  end
end
