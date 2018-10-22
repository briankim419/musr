class Api::V1::GenresController < ApplicationController
  def index
    render json: Genre.all
  end

  def show
    @genre = Genre.find(params[:id])
    render json: @genre.to_json
  end

  def create
    data = JSON.parse(request.body.read)
    new_genre = Genre.create(name: data["name"])
    render json: new_genre, adapter: :json
  end
end
