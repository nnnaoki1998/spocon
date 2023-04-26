class TeamController < ApplicationController
  def index
    render :json => Team.all
  end

  def create
    @team = Team.new(team_params)
    if @team.save
      render :json => {'status' => 'ok'}
    else
      render :json => {'status' => 'ng'}
    end
  end

  def edit
    @team = Team.find(params[:id])
  end

  def update
    @team = Team.find(params[:id])
    if @team.update(team_params)
      render :json => {'status' => 'ok'}
    else
      render :json => {'status' => 'ng'}
    end
  end

  def destroy
    @team = Team.find(params[:id])
    if @team.destroy
      render :json => {'status' => 'ok'}
    else
      render :json => {'status' => 'ng'}
    end
  end

  private
    def team_params
      params.permit(:uuid, :name, :sport_id, :icon_path, :description, :zip_code, :address, :longitude, :latitude)
    end
  end
