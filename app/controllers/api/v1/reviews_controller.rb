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
    @review = Review.new(review_params)

    @donut.shop = @shop
    @review.donut = @donut

    if @review.save
      render json: Review.last, adapter: :json
    else
      render
    end
  end

  private
    def reviewe_params
      params.require(:review).permit(
        :rating,
        :body,
        :price_range
      )
    end

end
