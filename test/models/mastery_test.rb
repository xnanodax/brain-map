# == Schema Information
#
# Table name: masteries
#
#  id            :integer          not null, primary key
#  deck_id       :integer          not null
#  user_id       :integer          not null
#  mastery_score :integer          default(0)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class MasteryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
