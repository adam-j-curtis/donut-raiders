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
#    @review = Review.new(review_params)


    #@donut.shop = @shop
    @review = Review.new
    @review.donut = @donut
    @review.shop = @shop

    @review.rating = params[:donutReviewRating]
    @review.body = params[:donutReviewTextBody]
    @review.price_range = params[:donutReviewPrice]

    if @review.save
      puts "winner"
      render json: Donut.find(params[:donut_id])
    else
      render json: Donut.find(params[:donut_id])
    end

  end

  # private
  #   def review_params
  #     params.require(:review).permit(
  #       :donutReviewTextBody,
  #       :donutReviewRating,
  #       :donutReviewPrice
  #     )
  #   end

end
