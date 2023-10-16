FactoryBot.define do
  factory :user do
    name { "陶山" }
    email { Faker::Internet.email }
  end
end
