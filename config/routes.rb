Rails.application.routes.draw do
  root "landing_page#index"
  devise_for :users, controllers: {registrations: "registrations"}
  resources :users , only: [:show] do
    get :followings, :followers, on: :member
  end
  resources :recipes
  resources :cook_books
  resources :recipe_scores, only: :create
  resources :follows, only: [:create, :destroy]
end
