
class TeamController < ApplicationController
  def index
    begin
      render :json => Team.all
    rescue => e
      render :json => {'error class' => e.class, 'error message' => e.message}, status: 500
    end
  end

  def create
    begin
      @team_generater = TeamGenerater.new
      @team = Team.new(@team_generater.generate(team_params))
      if @team.save
        render :json => {'status' => 'ok'}
      end
    rescue => e
      render :json => {'error class' => e.class, 'error message' => e.message}, status: 500
    end
  end

  def update
    begin
      @team_generater = TeamGenerater.new
      team_hash = @team_generater.generate(team_params)
      @team = Team.find(params[:id])
      if @team.update(team_hash)
        render :json => {'status' => 'ok'}
      end
    rescue => e
      render :json => {'error class' => e.class, 'error message' => e.message}, status: 500
    end
  end

  def destroy
    begin
      @team = Team.find(params[:id])
      if @team.destroy
        render :json => {'status' => 'ok'}
      end
    rescue => e
      render :json => {'error class' => e.class, 'error message' => e.message}, status: 500
    end
  end

  private
  def team_params
    params.permit(:uuid, :name, :sport_id, :icon_path, :description, :zip_code, :address)
  end
end
