class Api::V1::IdeasController < Api::V1::BaseController
  def index
    # unformatted = Idea.all.sort_by(&:created_at).reverse
    # @ideas = unformatted.map do |idea|
    #   { title:   idea.title,
    #     body:    idea.truncated_body,
    #     date:    idea.date,
    #     quality: idea.quality,
    #     id:      idea.id }
    # end
    respond_with Idea.all
  end
end