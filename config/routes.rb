Rails.application.routes.draw do



  namespace :api do
    get 'tag_searches/index'
  end

  namespace :api do
    get 'deck_searches/index'
  end

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :decks, only: [:index, :create, :show, :edit, :update, :destroy] do
      resources :taggings, only: [:index, :create, :show, :destroy]
      resources :cards, only: [:index, :create, :show, :edit, :update, :destroy]
      resources :studyscore, only: [:index]
      resources :masteries, only: [:index] do
        patch "record", on: :collection
      end
    end

    resources :studyscore, only: [] do
      get "fetch", on: :collection
      patch "update_by_card", on: :collection
    end
    resources :tags, only: [:index, :create, :show, :destroy]

    resources :users, only: [] do
      get "recent_decks", on: :collection
      get "popular_decks", on: :collection
    end
  end

  root to: "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
