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
#------------
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

  def self.find_tag(query_params)
    tag = Tag.find_name(query_params[:tagging][:name])
    if tag
    else
      tag = Tag.new(query_params.require(:tagging).permit(:name))
      tag.save
    end
    tag
  end

  def self.top_five_results(query_params)
    param = '%' + query_params.downcase + '%' #i can use sql query like
    Tag.where('lower(name) LIKE ?', param).limit(5)
  end

end
