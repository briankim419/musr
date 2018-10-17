Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :genres, only: [:index, :show, :create]
    end
  end

  resources :genres, only: [:index, :show]
  resources :albums, only: [:index, :show]
end
