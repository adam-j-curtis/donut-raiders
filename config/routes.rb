Rails.application.routes.draw do
  root 'shops#index'
  get '/shops', to: 'shops#index'
  get '/shops/:id', to: 'shops#index'
  get '/shops/:id/donuts/:id', to: 'shops#index'
  get '/api/v1/shops/:shop_id/donuts', to: 'api/v1/donuts#index'
  get '/api/v1/shops/:shop_id/donuts/:id', to: 'api/v1/donuts#show'

  devise_for :users

  resources :shops, only: [:index]
  resources :donuts, only: [:index]

    namespace :api do
      namespace :v1 do
        resources :shops, only: [:index, :show] do
          resources :donuts, only: [:index, :show] do
            resources :reviews, only: [:index, :show, :create]
        end
      end
    end
  end
end
