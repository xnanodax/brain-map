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

  def self.fetch_taggings(id)
    Deck.find_by(id: id).taggings
  end

  def self.top_five_results(query_params)
    param = '%' + query_params.downcase + '%' #i can use sql query like
    if query_params != ""
      @decks = Deck.where('lower(title) LIKE ? ', param).limit(5).to_a
      @decks.select { |deck| deck.cards.count > 0 }
    end
  end

  def mastery_score(user_id)
    if self.cards.count > 0
      sum = User.find(user_id).decks.find(self.id).studyscores.sum(:learning_score)
      total_score = (self.cards.count * 5)
      sum * 100 / total_score
    else
      0
    end
  end

end
