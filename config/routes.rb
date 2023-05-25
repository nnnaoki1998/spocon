Rails.application.routes.draw do
  # curl 127.0.0.1:3000/user
  get '/user', to: 'user#index'
  # curl -X POST -H "Content-Type: application/json" -d '{"name":"岸辺露伴","email":"kishiberohan@jojo.com"}' 127.0.0.1:3000/user
  post '/user', to: 'user#create'
  # curl 127.0.0.1:3000/sport
  get '/sport', to: 'sport#index'
  # curl -X POST -H "Content-Type: application/json" -d '{"name":"陸上"}' 127.0.0.1:3000/sport -i
  post '/sport', to: 'sport#create'
  # curl -X DELETE 127.0.0.1:3000/sport/3
  delete '/sport/:id', to: 'sport#destroy'
  # curl -X PATCH -H "Content-Type: application/json" -d '{"name":"錦木千束","email":"chisato@lyco.com"}' 127.0.0.1:3000/user/1
  patch 'user/:id', to: 'user#update'
  # curl 127.0.0.1:3000/team
  get '/team', to: 'team#index'
  # curl -X POST -H "Content-Type: application/json" -d '{"uuid":"6bf871c3-21c8-16ac-4bd8-acab8f6b0ee4","name":"東京バスケサークル","sport_id":3,"icon_path":"cccc","description":"ABCDEFGH","zip_code":"812-0017","address":"福岡市博多区美野島3-22-7","longitude":3,"latitude":3}' 127.0.0.1:3000/team
  post '/team', to: 'team#create'
  # curl -X PATCH -H "Content-Type: application/json" -d '{"uuid":"0ae5b251-bfae-c075-fd04-2b57f1410089","name":"FUKUOKAバスケサークル","sport_id":4,"icon_path":"dddd","description":"ABCDEFGH","zip_code":"814-0014","address":"福岡市中央区平尾3-20-57","longitude":4,"latitude":4}' 127.0.0.1:3000/team/3
  patch '/team/:id', to: 'team#update'
  # curl -X DELETE 127.0.0.1:3000/team/3
  delete '/team/:id', to: 'team#destroy'
end
