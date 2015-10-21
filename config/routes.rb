Rails.application.routes.draw do
  root 'pages#index'

  namespace :api, defaults: {format: 'json'} do
    mount_devise_token_auth_for 'User', at: 'auth'
    resources :products
  end

  get "*path" => "pages#index"
end
