class TeamController < ApplicationController
  def show
    begin
      team_info = Team.joins(:sport, :grade).select("
        team.id,
        team.uuid,
        team.name as team_name,
        team.icon_path,
        team.description,
        team.address_state,
        team.address_city,
        sport.name as sport_name,
        grade.name as grade_name
      ").where(team: { id: params[:id] }).first

      # レスポンスするデータが存在存在しない場合､204 No Contentを返す
      if !team_info.blank?
        render :json => team_info
      end
    rescue => e
      render :json => { "error class" => e.class, "error message" => e.message }, status: 500
    end
  end

  def create
    begin
      @team = Team.new(team_params)
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

  private

  def team_params
    params.permit(:name, :sport_id, :grade_id, :icon_path, :description, :address_state, :address_city)
  end
end