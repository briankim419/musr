class Api::V1::GenresController < ApplicationController
  # before_action :authenticate_user!, except: [:index, :show]
  def index

    render json: Genre.all
  end

  def show
    @genre = Genre.find(params[:id])
    render json: @genre.to_json
  end

  def create
    if current_user
      data = JSON.parse(request.body.read)
      new_genre = Genre.create(name: data["name"])
      render json: new_genre, adapter: :json
    else
      render json: { error: 'You must be logged in to create a genre' }, status: :unprocessable_entity
    end
  end

  def authorize_user
  if !user_signed_in? || !current_user.admin?
    raise ActionController::RoutingError.new("Not Found")
  end
end
end
