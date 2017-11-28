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

class Studyscore < ApplicationRecord
  validates :tester_id, :card_id, :learning_score, presence: true
  validates :tester_id, uniqueness: { scope: :card_id }
  validates :learning_score, :inclusion => { :in => 0..5 }

  belongs_to :user,
  primary_key: :id,
  foreign_key: :tester_id,
  class_name: :User

  belongs_to :card,
  primary_key: :id,
  foreign_key: :card_id,
  class_name: :Card



end
