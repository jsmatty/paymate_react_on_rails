Rails.application.routes.draw do
  namespace :api do
      resources :houses do
        resources :users
        resources :bills
      end
    end
  end
