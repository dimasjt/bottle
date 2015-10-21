class Api::ProductsController < BaseApiController
  def index
    render json: Product.all
  end

  def show
    render json: Product.friendly.find(params[:id])
  end
end
