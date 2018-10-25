class Api::V1::ReviewsController < ApplicationController
  def index
    render json: Review.all, adapter: :json
  end

  def show
    render json: Review.find(params[:id])
  end

  def create

    @shop = Shop.find(params[:shop_id])
    @donut = Donut.find(params[:donut_id])

<<<<<<< HEAD
    @review = Review.new
    @review.donut = @donut
    @review.shop = @shop

    @review.rating = params[:donutReviewRating]
    @review.body = params[:donutReviewTextBody]
    @review.price_range = params[:donutReviewPrice]

=======
    @review = Review.new(review_params)
    @review.donut = @donut
    @review.shop = @shop

>>>>>>> 0e6f559b53e744e5949457811134570764ca1f0a
    if @review.save
      render json: Donut.find(params[:donut_id])
    else
      render json: { errors: @review.errors.full_messages }
    end

  end

<<<<<<< HEAD
  # private
  #   def review_params
  #     params.require(:review).permit(
  #       :donutReviewTextBody,
  #       :donutReviewRating,
  #       :donutReviewPrice
  #     )
  #   end
=======
  private
  def review_params
    params.permit(
      :body,
      :rating,
      :price_range
    )
  end

>>>>>>> 0e6f559b53e744e5949457811134570764ca1f0a

end
