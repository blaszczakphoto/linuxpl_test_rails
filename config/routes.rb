Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'

  get '/:filter', to: 'todos#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'todos#index'
end
