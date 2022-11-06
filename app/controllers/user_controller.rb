class UserController < ApplicationController
  def index
    render :json => User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render :json => {'status' => 'ok'}
    else
      render :json => {'status' => 'ng'}
    end
  end

  private
    def user_params
      params.permit(:name, :email)
    end
end
