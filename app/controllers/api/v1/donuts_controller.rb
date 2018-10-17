class Api::V1::DonutsController < ApplicationController
  def index
    render json: Donut.all, adapter: :json
  end

  def show
    render json: Donut.find(params[:id])
  end
end
