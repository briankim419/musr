class Api::V1::AlbumsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @genre = Genre.find(params[:genre_id])
    @album = @genre.albums
    render json: @album
  end

  def show
    album = Album.find(params[:id])
    if album.genre.id == params[:genre_id].to_i
      render json: album
    else
      render json: {error: "Album does not exist"}
    end
  end

  def new
    album = Album.new(name: data[:name], artist: data[:artist], description: data[:description], release_date: data[:release_date], genre_id: data[:genre_id], album_art: data[:albumart])

    render json: {album: album}
  end

  def create


    # data = JSON.parse(request.body.read)
    # DO NOT USE REQUEST BODY READ!!!
      data = params
      album = Album.new(album_params)
    # UPDATE THIS TO USE STRONG PARAMS

    if album.save
      render json: {album: album}, adapter: :json
    else
      render json: { error: album.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def album_params
    params.permit(:name, :artist, :description, :release_date, :genre_id, :album_art)
  end
end
