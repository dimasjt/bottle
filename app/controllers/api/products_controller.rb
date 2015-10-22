class Api::ProductsController < BaseApiController
  def index
    render json: Product.all
  end

  def show
    render json: Product.friendly.find(params[:id])
  end

  def create
    product = Product.new(params_product)
    product.save
    render json: product    
  end

  private
    def params_product
      params.require(:product).permit(:id, :title, :color, :price, :description, :image)
    end
end
