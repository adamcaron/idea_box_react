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

  # def date
  #   date = self.created_at.localtime
  #   date.strftime("%b %d %Y") + " at " + date.strftime("%l:%M%P")
  # end

  # def truncated_body
  #   self.body.truncate(100, separator: /\s/)
  # end
end
