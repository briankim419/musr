class Api::V1::GenresController < ApplicationController
  def index
    render json: Genre.all
  end

  def show
    render json: Genre.find(params[:genre_id])
  end
end
