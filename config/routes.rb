Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  resources :shops, only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :donuts, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :donuts, only: [:index, :show]
      resources :reviews, only: [:index, :show]
      resources :shops, only: [:index, :show]
    end
  end
end
