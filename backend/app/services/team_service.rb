class TeamService
  # Teamを登録する
  def save(team_hash)
    team_hash["uuid"] = SecureRandom.uuid
    team_hash = add_coordinates(team_hash)
    @team = Team.new(team_hash)
    return @team.save
  end

  # Teamを更新する
  def update(id, team_hash)
    team_hash = add_coordinates(team_hash)
    @team = Team.find(id)
    return @team.update(team_hash)
  end

  # teamのハッシュのaddressを元に経度､緯度の情報を追加する
  private

  def add_coordinates(team_hash)
    if !team_hash["address"].blank?
      address = team_hash["address"]
      domain = "msearch.gsi.go.jp"
      path = "/address-search/AddressSearch/"
      parameter = "?q=" + address
      response_text = Net::HTTP.get(domain, path + parameter)
      coordinates = JSON.load(response_text)[0]["geometry"]["coordinates"] # 0 => 軽度, 1 => 緯度
      team_hash["longitude"] = coordinates[0]
      team_hash["latitude"] = coordinates[1]
    end
    return team_hash
  end
end
