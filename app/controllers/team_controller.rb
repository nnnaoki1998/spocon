class TeamController < ApplicationController
  def index
    begin
      render :json => Team.all
    rescue => e
      render :json => { "error class" => e.class, "error message" => e.message }, status: 500
    end
  end

  def create
    begin
      team_hash = team_params
      team_hash["uuid"] = SecureRandom.uuid
      @team = Team.new(team_hash)
      if @team.save
        render :json => { "status" => "ok" }
      end
    rescue => e
      render :json => { "error class" => e.class, "error message" => e.message }, status: 500
    end
  end

  def update
    begin
      @team = Team.find(params[:id])
      if @team.update(team_params)
        render :json => { "status" => "ok" }
      end
    rescue => e
      render :json => { "error class" => e.class, "error message" => e.message }, status: 500
    end
  end

  def destroy
    begin
      @team = Team.find(params[:id])
      if @team.destroy
        render :json => { "status" => "ok" }
      end
    rescue => e
      render :json => { "error class" => e.class, "error message" => e.message }, status: 500
    end
  end

  private

  def team_params
    params.permit(:name, :sport_id, :grade_id, :icon_path, :description, :address_state, :address_city)
  end
end
