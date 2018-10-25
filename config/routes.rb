Rails.application.routes.draw do
  root 'shops#index'
  get '/shops', to: 'shops#index'
  get '/shops/:id', to: 'shops#index'
<<<<<<< HEAD
  get '/shops/:shop_id/donuts/:id', to: 'shops#index'
=======
  get '/shops/:id/donuts/:id', to: 'shops#index'
  get '/api/v1/shops/:shop_id/donuts', to: 'api/v1/donuts#index'
  get '/api/v1/shops/:shop_id/donuts/:id', to: 'api/v1/donuts#show'
>>>>>>> 60a827f2d2804d07915bfc0aab8aa38015335c4d

  devise_for :users

  resources :shops, only: [:index]
  resources :donuts, only: [:index]

<<<<<<< HEAD
  namespace :api do
    namespace :v1 do
      resources :shops, only: [:index, :show] do
        resources :donuts, only: [:index, :show] do
          resources :reviews, only: [:index, :show, :create]
=======
    namespace :api do
      namespace :v1 do
        resources :shops, only: [:index, :show] do
          resources :donuts, only: [:index, :show] do
            resources :reviews, only: [:index, :show]
        end
>>>>>>> 60a827f2d2804d07915bfc0aab8aa38015335c4d
      end
    end
  end
end
