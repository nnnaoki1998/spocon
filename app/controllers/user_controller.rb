class UserController < ApplicationController
  def index
    begin
      render :json => User.all
    rescue => e
      render :json => { "error class" => e.class, "error message" => e.message }, status: 500
    end
  end

  def create
    begin
      @user = User.new(user_params)
      if @user.save
        render :json => { "status" => "ok" }
      end
    rescue => e
      render :json => { "error class" => e.class, "error message" => e.message }, status: 500
    end
  end

  def update
    begin
      @user = User.find(params[:id])
      if @user.update(user_params)
        render :json => { "status" => "ok" }
      end
    rescue => e
      render :json => { "error class" => e.class, "error message" => e.message }, status: 500
    end
  end

  private

  def user_params
    params.permit(:name, :email)
  end
end
