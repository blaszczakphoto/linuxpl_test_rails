FactoryGirl.define do
  factory :todo do
    text { Faker::Lorem.word }
    id { Faker::Lorem.unique.word }
  end
end