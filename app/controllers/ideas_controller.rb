class IdeasController < ApplicationController

  def index
    unformatted = Idea.all.sort_by(&:created_at).reverse
    @ideas = unformatted.map do |idea|
      { title:   idea.title,
        body:    idea.truncated_body,
        date:    idea.date,
        quality: idea.quality,
        id:      idea.id }
    end
  end

end