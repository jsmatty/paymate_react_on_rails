Rails.application.routes.draw do
  namespace :api do
    resources :users
      resources :houses do
        resources :users
      end
    end
  end
