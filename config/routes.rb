Rails.application.routes.draw do
  namespace :mobile do
    get '/m',to: "mobile_view#home"
    get '/m/time_table_search', to: "mobile_view#time_table_search"
  end
  root to: "mobile/mobile_view#home"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
