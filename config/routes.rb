Rails.application.routes.draw do
  get 'profiles/show'
  get 'profiles/my_show'
  get 'profiles/edit'

  resources :articles do
    resources :article_likes, only: [:create, :destroy]
  end

  root "statics#top"

  devise_for :users, controllers: {   registrations: 'users/registrations',
                                    sessions: 'users/sessions' }
end
