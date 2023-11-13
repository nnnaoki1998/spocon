class SportController < ApplicationController
  def index
    begin
      render :json => Sport.all
    rescue => e
      render :json => { "error class" => e.class, "error message" => e.message }, status: 500
    end
  end

  def create
    begin
      @sport = Sport.new(sport_params)
      if @sport.save
        render :json => { "status" => "ok" }
      end
    rescue => e
      render :json => { "error class" => e.class, "error message" => e.message }, status: 500
    end
  end

  def destroy
    begin
      @sport = Sport.find(params[:id])
      if @sport.destroy
        render :json => { "status" => "ok" }
      end
    rescue => e
      render :json => { "error class" => e.class, "error message" => e.message }, status: 500
    end
  end

  private

  def sport_params
    params.permit(:name)
  end
end
