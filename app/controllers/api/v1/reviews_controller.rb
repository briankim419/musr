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
    if current_user != nil
      review = Review.new(body: data[:body], rating: data[:rating])
    else
      render json: { error: 'You must be logged in to post a comment' }, status: :unprocessable_entity
    end

    render json: {album: review}
  end

  def create
    data = params
    if current_user != nil
      review = Review.new(body: data[:body], rating: data[:rating], album_id: data[:album_id], user: current_user)
    else
      render json: { error: 'You must be logged in to post a comment' }, status: :unprocessable_entity
    end

    if review.save
      render json: {review: review}, adapter: :json
    else
      render json: { error: review.errors.full_messages }, status: :unprocessable_entity
    end
  end


  private

  def review_params
    params.require(:review).permit(:body, :rating, :votes)
  end
end
