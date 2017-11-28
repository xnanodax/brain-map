# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :taggings,
  primary_key: :id,
  foreign_key: :tag_id,
  class_name: :Tagging

  has_many :decks,
  through: :taggings,
  source: :deck

  def self.find_name(tag_name)
    Tag.find_by(name: tag_name)
  end

  def self.find_tag(params)
    tag = Tag.find_name(params[:tagging][:name])
    if tag
    else
      tag = Tag.new(params.require(:tagging).permit(:name))
      tag.save
    end
    tag
  end

end
