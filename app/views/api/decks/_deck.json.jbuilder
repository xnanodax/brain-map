json.extract! deck, :id, :title, :author_id, :mastery_percentage
json.cards deck.cards.pluck(:id)
json.tags deck.tags.pluck(:tag_id)
