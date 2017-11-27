# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  deck_id    :integer          not null
#  tag_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ApplicationRecord
  validates :deck_id, :tag_id, presence: true
  validates :tag_id, uniqueness: { scope: :deck_id }
  validates :deck_id, uniqueness: { scope: :tag_id }

  belongs_to :deck,
  primary_key: :id,
  foreign_key: :deck_id,
  class_name: :Deck

  belongs_to :tag,
  primary_key: :id,
  foreign_key: :tag_id,
  class_name: :Tag

  def self.find_using_tag_name(tag_name)
    tag = Tag.find_by(name: tag_name.titleize)
    if tag
      Tagging.find_by(tag_id: tag.id)
    end
  end
end
