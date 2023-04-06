require 'rails_helper'

RSpec.describe UserController, type: :controller do
  describe "#index" do
    # 正常なレスポンスか？
    it "responds successfully" do
      get :index
      expect(response).to be_successful
    end
    # 200レスポンスが返ってきているか？
    it "returns a 200 response" do
      get :index
      expect(response).to have_http_status "200"
    end
  end

  describe "#create" do
    context "create user" do
      # 正常にuserを作成できるか？
      it "create successfully" do
        post :create, params: {
            user: {
              name: "aaaa",
              email: "aaa@aaa",
            }
          }
      end
    end
  end
end
