Rails.application.routes.draw do
  devise_for :admins
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :genres, only: [:index, :show, :create] do
        resources :albums, only: [:index, :show, :create, :new] do
          resources :reviews, only: [:new, :create, :index, :edit, :destroy]
        end
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :albums, only: [:create, :new] do
        resources :reviews, only: [:new, :create, :index, :edit, :destroy]
      end
    end
  end

  resources :genres, only: [:index, :show] do
    resources :albums, only: [:index, :show, :new, :create] do
      resources :reviews, only: [:new, :create, :index, :edit, :destroy]
    end
  end

  resources :albums, only:[:new, :create] do
    resources :reviews, only: [:new, :create, :index, :edit, :destroy]
    end
  end
