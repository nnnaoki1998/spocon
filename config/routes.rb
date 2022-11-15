Rails.application.routes.draw do
  # curl 127.0.0.1:3000/user
  get '/user', to: 'user#index'
  # curl -X POST -H "Content-Type: application/json" -d '{"name":"岸辺露伴","email":"kishiberohan@jojo.com"}' 127.0.0.1:3000/user
  post '/user', to: 'user#create'
  # curl 127.0.0.1:3000/sport
  get '/sport', to: 'sport#index'
  # curl -X POST -H "Content-Type: application/json" -d '{"name":"陸上"}' 127.0.0.1:3000/sport -i
  post '/sport', to: 'sport#create'
  #curl -X DELETE 127.0.0.1:3000/sport/3
  delete '/sport/:id', to: 'sport#destroy'
end
