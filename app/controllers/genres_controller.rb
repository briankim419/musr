class GenresController < ApplicationController
  def index
  end

  def show
<<<<<<< HEAD
    @genre = Genre.find(params[:id])
    @genres = Genre.all
    @albums = @genre.albums
=======
>>>>>>> 9f213e0a9394af84b706a21731746ad939d13f68
  end
end
