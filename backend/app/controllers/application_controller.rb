class ApplicationController < ActionController::Base
  # CSRFを無効にする
  # todo: いずれはCSRF対策を行う必要がありそう
  protect_from_forgery with: :null_session

  private

  def to_int(str)
    begin
      Integer(str)
    rescue
      nil
    end
  end
end
