Rails.application.routes.draw do

  root :to => 'main#index'

  get 'main/index'
  get 'main/factoring'
  get 'main/consultancy'
  get 'main/about'
  get 'main/contact'
  get 'main/test'
  get 'main/locale'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
