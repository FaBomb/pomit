Rails.application.routes.draw do
  get 'profiles/show'
  get 'profiles/my_show'
  get 'profiles/edit'
  get 'articles/index'
  get 'articles/show'
  get 'articles/new'
  root "statics#top"

  devise_for :users, controllers: {   registrations: 'users/registrations',
                                    sessions: 'users/sessions' }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
