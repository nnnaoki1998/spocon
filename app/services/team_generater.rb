# Teamを生成するクラス
class TeamGenerater
  # Teamを生成する
  # 戻り値はハッシュ
  def generate(team_hash)
    if !team_hash['address'].blank?
      coordinates = coordinates(team_hash['address'])
      team_hash['longitude'] = coordinates[0]
      team_hash['latitude'] = coordinates[1]
    end
    return team_hash
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