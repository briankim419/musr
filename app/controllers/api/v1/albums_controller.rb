class Api::V1::AlbumsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    @genre = Genre.find(params[:genre_id])
    @album = @genre.albums
    render json: @album
  end

  def show
    render json: Album.find(params[:id])
  end

  def new
    album = Album.new(name: data[:name], artist: data[:artist], description: data[:description], release_date: data[:release_date], genre_id: data[:genre_id], album_art: data[:albumart])

    render json: {album: album}
  end

  def create

    # binding.pry
    # data = JSON.parse(request.body.read)
    # DO NOT USE REQUEST BODY READ!!!
    data = params


    album = Album.new(name: data["name"], artist: data["artist"], description: data["description"], release_date: data["release_date"], genre_id: data["genre_id"], album_art: data["albumart"])
    # UPDATE THIS TO USE STRONG PARAMS

    if album.save
      render json: {album: album}, adapter: :json
    else
      render json: { error: album.errors.full_messages }, status: :unprocessable_entity
    end
  end
end
