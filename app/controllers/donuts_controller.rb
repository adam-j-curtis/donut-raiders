class DonutsController < ApplicationController
  def index
    @donuts = Donut.all
  end

  def show
  end
end
