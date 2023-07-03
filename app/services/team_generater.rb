class TeamGenerater
  def generate(team_params)
    @team = Team.new(team_params)
    @team.uuid = SecureRandom.uuid
    return @team
  end
end
