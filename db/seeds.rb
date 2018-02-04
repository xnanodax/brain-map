# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# deckDefault1 = Deck.create!({ title: "Tap Here To Edit", author_id: user1.id })
# deckDefault2 = Deck.create!({ title: "Tap Here To Edit", author_id: user2.id })
# cardDefault1 = Card.create({ question: "tap to edit", answer: "tap to edit", author_id: user1.id, deck_id: deckDefault1.id })
# cardDefault2 = Card.create({ question: "tap to edit", answer: "tap to edit", author_id: user2.id, deck_id: deckDefault2.id })

User.destroy_all
Deck.destroy_all
Card.destroy_all
Tag.destroy_all
Tagging.destroy_all
Studyscore.destroy_all

def reset_pk_num
  model_names = [User, Deck, Card, Tag, Tagging, Studyscore]

  model_names.each do |model_name|
    model_name.destroy_all
  end

  table_names = ["users", "decks", "cards", "tags", "taggings", "studyscores"]

  table_names.each do |table_name|
    ActiveRecord::Base.connection.reset_pk_sequence!(table_name)
  end
end
reset_pk_num

user1 = User.create!({ username: "demodemo", email: "demodemo", password: "demodemo" });
user2 = User.create!({ username: "password", email: "password", password: "password" });

deck1 = Deck.create!({ title: "How To Get Into App Academy", author_id: user1.id })
deck2 = Deck.create!({ title: "Chemistry", author_id: user1.id })
deck3 = Deck.create!({ title: "Hiragana", author_id: user2.id })


card1 = Card.create!({
  question: ".select", deck_id: deck1.id,
  answer: "Returns an array containing all elements of enum for which the given block returns a true value." })

card2 = Card.create!({
  question: ".reject", deck_id: deck1.id,
  answer: "Returns an array for all elements of enum for which the given block returns false." })

card3 = Card.create!({
  question: ".uniq", deck_id: deck1.id,
  answer: "Returns a new array by removing duplicate values in self." })
# -------
card4 = Card.create!({
  question: "electron", deck_id: deck2.id,
  answer: "negatively charged particles" })

card5 = Card.create!({
  question: "protons", deck_id: deck2.id,
  answer: "postively charged particles found in the nucleus" })

card6 = Card.create!({
  question: "neutrons", deck_id: deck2.id,
  answer: "neutral charged particles found in the nucleus" })

Card.create!({ question: "あ", answer: "a", deck_id: deck3.id })
Card.create!({ question: "い", answer: "i", deck_id: deck3.id})
Card.create!({ question: "う", answer: "u", deck_id: deck3.id})
Card.create!({ question: "え", answer: "e", deck_id: deck3.id})
Card.create!({ question: "お", answer: "o", deck_id: deck3.id})
Card.create!({ question: "か", answer: "ka", deck_id: deck3.id})
Card.create!({ question: "き", answer: "ki", deck_id: deck3.id})
Card.create!({ question: "く", answer: "ku", deck_id: deck3.id})
Card.create!({ question: "け", answer: "ke", deck_id: deck3.id})
Card.create!({ question: "こ", answer: "ko", deck_id: deck3.id})



tag1 = Tag.create!({name: "science"})
tag2 = Tag.create!({name: "mathematics"})
tag3 = Tag.create!({name: "foreign language"})
tag4 = Tag.create!({name: "english"})
tag5 = Tag.create!({name: "finances"})
tag6 = Tag.create!({name: "technology"})
tag7 = Tag.create!({name: "computer science"})
tag8 = Tag.create!({name: "food"})
tag9 = Tag.create!({name: "arts"})
tag10 = Tag.create!({name: "law"})
tag11 = Tag.create!({name: "medical"})
tag12 = Tag.create!({name: "other"})
tag13 = Tag.create!({name: "k-6"})
tag14 = Tag.create!({name: "7-12"})
tag15 = Tag.create!({name: "university"})

Tagging.create!({deck_id: deck1.id, tag_id: tag7.id})
Tagging.create!({deck_id: deck1.id, tag_id: tag6.id})
Tagging.create!({deck_id: deck2.id, tag_id: tag1.id})
Tagging.create!({deck_id: deck2.id, tag_id: tag13.id})


studyscore1 = Studyscore.create!({ card_id: card1.id, tester_id: user1.id, learning_score: 5})
studyscore2 = Studyscore.create!({ card_id: card2.id, tester_id: user1.id, learning_score: 4});
studyscore3 = Studyscore.create!({ card_id: card3.id, tester_id: user1.id, learning_score: 2});
studyscore4 = Studyscore.create!({ card_id: card4.id, tester_id: user2.id, learning_score: 1})
studyscore5 = Studyscore.create!({ card_id: card5.id, tester_id: user2.id, learning_score: 2})
studyscore6 = Studyscore.create!({ card_id: card6.id, tester_id: user2.id, learning_score: 1})
studyscore7 = Studyscore.create!({ card_id: card6.id, tester_id: user1.id, learning_score: 1})
