Rails.application.routes.draw do
  namespace :mobile do
    get '/m',to: "mobile_view#home"
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
