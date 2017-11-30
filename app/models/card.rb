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

class Card < ApplicationRecord
  validates :author_id, :deck_id, presence: true
#------------
  belongs_to :deck,
  primary_key: :id,
  foreign_key: :deck_id,
  class_name: :Deck

  has_many :studyscores,
  primary_key: :id,
  foreign_key: :card_id,
  class_name: :Studyscore
end
