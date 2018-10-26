class Api::V1::AlbumsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    @genre = Genre.find(params[:genre_id])
    @albums = @genre.albums
    render json: @albums
  end

  def show
    render json: Album.find(params[:id])
  end

  def new

    album = Album.new

    render json: {album: album}
  end

  def create
    album = Album.new(album_params)

    if album.save
      render json: { album: album }, adapter: :json
    else
      render json: { error: album.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def album_params
    params.require(:album).permit(:name, :artist, :description, :release_date, :genre_id, :album_art)
  end
end
