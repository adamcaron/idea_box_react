require 'rails_helper'

RSpec.describe Idea, type: :model do
  let(:idea) { $idea = Idea.create!(title: "Great Idea", body: "Here's an excellent idea.") }

  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:body) }

  describe "public instance methods" do
    context "responds to its methods" do
      it { expect(idea).to respond_to(:quality) }

      it { expect(idea).to respond_to(:swill?) }
      it { expect(idea).to respond_to(:plausible?) }
      it { expect(idea).to respond_to(:genius?) }

      it { expect(idea).to respond_to(:increase_quality) }
      it { expect(idea).to respond_to(:decrease_quality) }
      it { expect(idea).to respond_to(:date) }
      it { expect(idea).to respond_to(:truncated_body) }
    end

    context "executes methods correctly" do
      context "#quality" do
        it "responds with 'swill', 'plausible', or 'genius'" do
          expect(idea.quality).to eq("swill" || "plausible" || "genius")
        end

        it "has a quality of 'swill' by default" do
          expect(idea.quality).to eq("swill")
        end
      end

      context "#increase_quality" do
        it "responsds with plausible, if swill" do
          idea.increase_quality

          expect(idea.quality).to eq("plausible")
        end

        it "responsds with genius, if plausible" do
          idea.quality = "plausible"

          idea.increase_quality

          expect(idea.quality).to eq("genius")
        end

        it "does nothing, if genius already" do
          idea.quality = "genius"

          idea.increase_quality

          expect(idea.quality).to eq("genius")
        end
      end

      context "#decrease_quality" do
        it "responsds with plausible, if genius" do
          idea.quality = "genius"

          idea.decrease_quality

          expect(idea.quality).to eq("plausible")
        end

        it "responsds with swill, if plausible" do
          idea.quality = "plausible"

          idea.decrease_quality

          expect(idea.quality).to eq("swill")
        end

        it "does nothing, if swill already" do
          idea.decrease_quality

          expect(idea.quality).to eq("swill")
        end
      end

    end
  end
end
