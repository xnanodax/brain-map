  json.set! @deck.id do
    json.partial! './api/decks/deck', deck: @deck
  end
