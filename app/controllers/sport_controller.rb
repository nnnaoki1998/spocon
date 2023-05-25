class SportController < ApplicationController
  def index
    render :json => Sport.all
  end

  def create
    @sport = Sport.new(sport_params)
    if @sport.save
      render :json => {'status' => 'ok'}
    else
      render :json => {'status' => 'ng'}
    end
  end

  def destroy
    @sport = Sport.find(params[:id])
    if @sport.destroy
      render :json => {'status' => 'ok'}
    else
      render :json => {'status' => 'ng'}
    end
  end

  private
    def sport_params
      params.permit(:name)
    end
  end
