# == Schema Information
#
# Table name: cards
#
#  id          :integer          not null, primary key
#  keyword     :string           not null
#  body        :text             not null
#  user_rating :integer          default(0)
#  author_id   :integer          not null
#  deck_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class CardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
