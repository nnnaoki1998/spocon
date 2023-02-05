# require 'rails_helper'

# RSpec.describe User, type: :model do
#   describe User do
#     before do
#       @user = FactoryBot.build(:user)
#     end
#     describe 'user新規登録' do
#       context '新規登録がうまくいくとき' do
#         it 'nameとemailが存在すれば登録できること' do
#           expect(@user).to be_valid
#         end
#       end

#       context '新規登録がうまくいかないとき' do
#         it 'nameが空では登録できないこと' do
#           @user.name = nil
#           @user.valid?
#           expect(@user.errors.full_messages).to include('名前を入力してください')
#         end
#         it 'emailが空では登録できないこと' do
#           @user.email = nil
#           @user.valid?
#           expect(@user.errors.full_messages).to include('Eメールを入力してください')
#         end
#         it '重複したemailが存在する場合登録できないこと' do
#           @user.save
#           another_user = FactoryBot.build(:user, email: @user.email)
#           another_user.valid?
#           expect(another_user.errors.full_messages).to include('Eメールはすでに存在します')
#         end
#       end
#     end
#   end
# end