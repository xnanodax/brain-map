json.order do
  json.array! @recent_decks_order
end

@recent_decks.each do |deck|
  json.set! deck.id do
    json.extract! deck, :id, :title
  end
end
