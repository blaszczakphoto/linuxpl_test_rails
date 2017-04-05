FactoryGirl.define do
  factory :todo do
    text { Faker::Lorem.word }
  end
end