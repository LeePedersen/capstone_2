Rails.application.routes.draw do
  root to: 'homepage#index'

  resources :conversations do
    resources :messages
  end

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index]
    end
  end

  get '/signup' => 'users#new'
  post '/users' => 'users#create'
  get '/user' => 'users#show'
  delete '/user' => 'users#destroy'

  get '/signin' => 'sessions#new'
  post '/signin' => 'sessions#create'
  get '/signout' => 'sessions#destroy'

end
