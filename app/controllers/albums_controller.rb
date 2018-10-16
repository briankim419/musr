class AlbumsController < ApplicationController

  def index
    @album = Album.all
  end
end
