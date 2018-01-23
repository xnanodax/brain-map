json.order do
  json.array! @popular_decks_order
end

@popular_decks.each do |deck|
  json.set! deck.id do
    json.extract! deck, :id, :title, :num_plays
  end
end
