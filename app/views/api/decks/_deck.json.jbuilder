json.extract! deck, :id, :title, :author_id
json.set! :mastery_score, deck.mastery_score(current_user.id)
json.cards deck.cards.pluck(:id)
json.num_cards deck.cards.size
