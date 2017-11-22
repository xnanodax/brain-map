# == Schema Information
#
# Table name: decks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Deck < ApplicationRecord
  validates :title, :author_id, presence: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  # has_many :cards
  # has_many :tags
end
