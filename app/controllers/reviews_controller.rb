class ReviewsController < ApplicationController
skip_before_action :verify_authenticity_token
before_action :authenticate_user!

  def index
    @review = Review.all
  end

  def new
    @review = Review.new
  end

  def create
    binding.pry
    @review = Review.new(review_params)

    if @review.save
      redirect_to @review.album_id, notice: "Review added successfully"
    else
      flash[:notice] = @review.errors.full_messages.join(', ')
      redirect_to @review.album_id
    end
  end

  private

  def review_params
    params.require(:album).permit(:body, :rating, :votes)
  end
end
