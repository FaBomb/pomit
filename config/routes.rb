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
end
