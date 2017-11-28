# == Schema Information
#
# Table name: decks
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  author_id          :integer          not null
#  mastery_percentage :integer          default(0)
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Deck < ApplicationRecord
  validates :title, :author_id, presence: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  has_many :cards,
  primary_key: :id,
  foreign_key: :deck_id,
  class_name: :Card,
  dependent: :destroy

  has_many :taggings,
  primary_key: :id,
  foreign_key: :deck_id,
  class_name: :Tagging

  has_many :tags,
  through: :taggings,
  source: :tag

  has_many :studyscores,
  through: :cards,
  source: :studyscores

  def self.fetch_user_score(deckId, current_user_id)
    Deck.find_by(id: deckId)
        .studyscores
        .where(tester_id: current_user_id)
  end
end
