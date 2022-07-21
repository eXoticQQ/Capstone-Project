Rails.application.routes.draw do
  resources :user_followers
  
  resources :comments, only: [:index, :show, :create]
  resources :posts, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create]
  post '/login', to: 'authentication#login'
  post '/auto_login', to: 'authentication#auto_login'
  get '/self_posts/:id', to: 'users#show_posts'

  get '/login', to: 'login#new'
  get '/login', to: 'login#create'
  get '/?', to: 'posts#index'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
