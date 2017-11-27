# == Schema Information
#
# Table name: studyscores
#
#  id             :integer          not null, primary key
#  tester_id      :integer          not null
#  card_id        :integer          not null
#  learning_score :integer          default(0)
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class StudyscoreTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
