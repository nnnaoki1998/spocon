Rails.application.routes.draw do
  # curl 127.0.0.1:3000/user
  get "/user", to: "user#index"
  # curl -X POST -H "Content-Type: application/json" -d '{"name":"岸辺露伴","email":"kishiberohan@jojo.com", "team_id":1}' 127.0.0.1:3000/user
  post "/user", to: "user#create"
  # curl -X PATCH -H "Content-Type: application/json" -d '{"name":"錦木千束","email":"chisato@lyco.com"}' 127.0.0.1:3000/user/1
  patch "/user/:id", to: "user#update"
  # curl 127.0.0.1:3000/sport
  get "/sport", to: "sport#index"
  # curl 127.0.0.1:3000/grade
  get "/grade", to: "grade#index"
  # curl 127.0.0.1:3000/team/1
  get "/team/:id", to: "team#show"
  # curl -X POST -H "Content-Type: application/json" -d '{"name":"東京バスケサークル","sport_id":3,"grade_id":3,"icon_path":"cccc","description":"ABCDEFGH","address_state":"福岡県","address_city":"福岡市"}' 127.0.0.1:3000/team
  post "/team", to: "team#create"
  # curl -X PATCH -H "Content-Type: application/json" -d '{"name":"FUKUOKAバスケサークル","sport_id":4,"grade_id":4,"icon_path":"dddd","description":"ABCDEFGH","address_state":"福岡県","address_city":"福岡市"}' 127.0.0.1:3000/team/3
  patch "/team/:id", to: "team#update"
  # curl 127.0.0.1:3000/team-info
  get "/team-info", to: "team_info#index"
end
