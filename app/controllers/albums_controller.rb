class AlbumsController < ApplicationController
skip_before_action :verify_authenticity_token
  def index
    @album = Album.find(params[:genre_id])
  end

  def new
    @album = Album.new
  end

  def create
    @album = Album.new(album_params)

    if @album.save
      redirect_to @album.genre_id, notice: "Album added successfully"
    else
      flash[:notice] = @album.errors.full_messages.join(', ')
      redirect_to @album.genre_id
    end
  end

  private

  def album_params
    params.require(:album).permit(:name, :artist, :description, :release_date, :genre_id)
  end
end
