class DonutsController < ApplicationController
  def index
    @donuts=Donuts.all
  end
end
