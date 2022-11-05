class SportController < ApplicationController
    def index
      render :json => Sport.all
    end
  end
