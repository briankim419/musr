Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :genres, only: [:index, :show, :create] do
        resources :albums, only: [:index, :show, :create, :new]
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :albums, only: [:create, :new]
    end
  end

  resources :genres, only: [:index, :show] do
    resources :albums, only: [:index, :show, :new, :create]
  end

  resources :albums, only:[:new, :create]
end
