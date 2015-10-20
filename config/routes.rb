Rails.application.routes.draw do
  root 'pages#index'

  namespace :api, defaults: {format: 'json'} do
    resources :products
  end

  get "*path" => "pages#index"
end
