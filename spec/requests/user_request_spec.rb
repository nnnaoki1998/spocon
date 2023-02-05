RSpec.describe UserController, type: :controller do
    describe 'ルーティング単位（例：GET #index）' do
      before {
        get :index
        @referer = 'http://localhost'
        @request.env['HTTP_REFERER'] = @referer
      }

      #画面から渡ってくるパラメータの定義
      let(:params) do
        { user: {
            name: 'user',
            email: 'email',
          }
        }
      end

      it 'レスポンスコードが200であること' do
        expect(response).to have_http_status(:ok)
      end

    end
end
