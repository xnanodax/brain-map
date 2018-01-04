json.extract! deck, :id, :title, :author_id
json.set! :mastery_score, deck.mastery_score(current_user.id)
json.cards deck.cards.pluck(:id)
json.tags deck.tags.pluck(:tag_id)
json.numCards deck.cards.length
