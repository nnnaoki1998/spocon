# Teamを生成するクラス
class TeamGenerater
  def generate(team_params)
    @team = Team.new(team_params)
    coordinates = coordinates(@team.address)
    longitude = coordinates[0]
    latitude = coordinates[1]
    @team.longitude = longitude
    @team.latitude = latitude
    return @team
  end

  # アドレスを元に緯度､軽度を取得する
  # 戻り値は長さ2の配列: 0 => 軽度, 1 => 緯度
  private
  def coordinates(address)
    domain = 'msearch.gsi.go.jp'
    path = '/address-search/AddressSearch/'
    parameter = '?q=' + address
    p path + parameter
    response_text = Net::HTTP.get(domain, path + parameter)
    coordinates = JSON.load(response_text)[0]['geometry']['coordinates']
    return coordinates
  end
end