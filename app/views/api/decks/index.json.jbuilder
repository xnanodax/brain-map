@decks.each do |deck|
  json.set! deck.id do
    json.partial! './api/decks/deck', deck: deck
  end
end


# json.extract! :id


# -use associations and full them later on on json jbuilder
#
# -front end display ONLY decks where author_id = current_user
