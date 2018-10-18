class DonutsController < ApplicationController
  def index
    @donuts = Donut.all
  end
end
