Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :decks, only: [:index, :create, :show, :edit, :update, :destroy] do
      resources :taggings, only: [:index, :create, :show, :destroy]
      resources :cards, only: [:index, :create, :show, :edit, :update, :destroy]
      resources :studyscore, only: [ :index, :create, :show, :update, :destroy]
    end
    resources :tags, only: [:index, :create, :show, :destroy]
  end

  root to: "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
