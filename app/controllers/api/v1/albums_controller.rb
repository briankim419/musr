class Api::V1::AlbumsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @genre = Genre.find(params[:genre_id])
    @albums = @genre.albums
    render json: @albums
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

    album = Album.new

    render json: {album: album}
  end

  def create
      data = params
      album = Album.new(album_params)

    if album.save
      render json: { album: album }, adapter: :json
    else
      render json: { error: album.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def album_params
    params.permit(:name, :artist, :description, :release_date, :genre_id, :album_art)
  end
end
