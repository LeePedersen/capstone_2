Rails.application.routes.draw do
  root to: 'homepage#index'

  resources :conversations do
    resources :messages
  end

end
