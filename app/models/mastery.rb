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

class Mastery < ApplicationRecord
  validates :deck_id, :user_id, :mastery_score, presence: true
  validates :user_id, uniqueness: { scope: :deck_id }

  
end
