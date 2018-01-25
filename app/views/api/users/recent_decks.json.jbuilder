json.order do
  json.array! @recent_decks.pluck(:id)
end

@recent_decks.each do |deck|
  json.set! deck.id do
    json.extract! deck, :id, :title
  end
end
