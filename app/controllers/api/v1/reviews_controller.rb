class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  # before_action :authenticate_user!, except: [:index, :show]

  def index

    render json: Album.find(params[:album_id]).reviews
  end

  def show
    render json: Review.find(params[:id])
  end

  def new
    review = Review.new(body: data[:body], rating: data[:rating])

    render json: {album: review}
  end

  def create
    data = params
    review = Review.new(body: data[:body], rating: data[:rating], album_id: data[:album_id], user: current_user)
    # UPDATE THIS TO USE STRONG PARAMS

    if review.save
      render json: {review: review.album}, adapter: :json
    else
      render json: { error: review.errors.full_messages }, status: :unprocessable_entity
    end
  end


  private

  def album_params
    params.require(:review).permit(:body, :rating, :votes)
  end
end
