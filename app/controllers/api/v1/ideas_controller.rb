class Api::V1::IdeasController < Api::V1::BaseController
  def index
    respond_with Idea.all.sort_by(&:created_at).reverse
  end

  def create
    @idea = Idea.create(idea_params)
    respond_with :api, :v1, @idea, location: nil
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body)
  end
end