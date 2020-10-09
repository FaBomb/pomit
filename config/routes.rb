Rails.application.routes.draw do
  
  resources :rooms, only: %i[show]

  resources :profiles

  resources :articles do
    resources :article_likes, only: [:create, :destroy]
    resources :requests, only: [:create, :update, :destroy]
  end

  root "statics#top"

  devise_for :users, controllers: {   registrations: 'users/registrations',
                                    sessions: 'users/sessions' }
end
