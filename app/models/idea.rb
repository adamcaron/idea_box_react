class Idea < ActiveRecord::Base
  validates :title, :body, presence: true

  enum quality: [:swill, :plausible, :genius]

  # def increase_quality
  #   if swill?
  #     plausible!
  #   elsif plausible?
  #     genius!
  #   end
  # end

  # def decrease_quality
  #   if genius?
  #     plausible!
  #   elsif plausible?
  #     swill!
  #   end
  # end

end
