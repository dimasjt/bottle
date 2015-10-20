class Api::ProductsController < ApplicationController
  def index
    render json: Product.all
  end

  def show
    render json: Product.friendly.find(params[:id])
  end
end
