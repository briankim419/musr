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
    album = Album.new(name: params[:name], artist: params[:artist], description: params[:description], release_date: params[:release_date], genre_id: params[:genre_id])

    render json: {album: album}
  end

  def create
    album = Album.new(name: params[:name], artist: params[:artist], description: params[:description], release_date: params[:release_date], genre_id: params[:genre_id])

    if album.save
      render json: {album: album}
    else
      render json: { error: album.errors.full_messages }, status: :unprocessable_entity
    end
  end
end
