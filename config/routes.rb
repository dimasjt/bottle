Rails.application.routes.draw do
  root 'pages#index'

  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :products
  end

  get "*path" => "pages#index"
end
