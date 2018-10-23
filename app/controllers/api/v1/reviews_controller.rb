class Api::V1::ReviewsController < ApplicationController
  def index
    render json: Review.all, adapter: :json
  end

  def show
    render json: Review.find(params[:id])
  end
end
