require 'faker'

class Seed

  def self.start
    seed = Seed.new
    seed.generate_ideas
  end

  def generate_ideas
    10.times do
      title = Faker::Lorem.sentence
      body  = Faker::Lorem.paragraph(4) # sentence count
      Idea.create!(title: title, body: body)
    end
  end

end

Seed.start