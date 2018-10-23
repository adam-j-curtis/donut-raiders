Rails.application.routes.draw do
  root 'shops#index'


  devise_for :users

  resources :shops, only: [:index, :show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :donuts, only: [:index]


  namespace :api do
    namespace :v1 do
      resources :shops, only: [:index, :show] do
        resources :donuts, only: [:index, :show] do
          resources :reviews, only: [:index, :show]
      end
    end
  end
end
  get "*path", to: "shops#index"


end
