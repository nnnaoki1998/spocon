class SportController < ApplicationController
  def index
    begin
      render :json => Sport.select("id, name").order(:id)
    rescue => e
      render :json => { "error class" => e.class, "error message" => e.message }, status: 500
    end
  end
end
