Rails.application.routes.draw do
<<<<<<< HEAD
  root 'homes#index'
=======
  root 'donuts#index'

>>>>>>> master

  devise_for :users

  resources :shops, only: [:index, :show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :donuts, only: [:index]

<<<<<<< HEAD
  namespace :api do
    namespace :v1 do
      resources :categories, only: [:index]
    end
  end

=======

  namespace :api do
    namespace :v1 do
      resources :donuts, only: [:index, :show]
      resources :reviews, only: [:index, :show]
      resources :shops, only: [:index, :show]
    end
  end

  get "*path", to: "donuts#index"


>>>>>>> master
end
