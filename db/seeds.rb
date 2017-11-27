# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Deck.destroy_all
Card.destroy_all
Tag.destroy_all
Tagging.destroy_all

user1 = User.create!({
  username: "password",
  email: "password",
  password: "password"
});

user2 = User.create!({
  username: "password1",
  email: "password1",
  password: "password1"
});

user3 = User.create!({
  username: "password2",
  email: "password2",
  password: "password2"
});

user4 = User.create!({
  username: "password3",
  email: "password3",
  password: "password3"
});

user5 = User.create!({
  username: "password4",
  email: "password4",
  password: "password4"
});

user6 = User.create!({
  username: "password5",
  email: "password5",
  password: "password5"
});

user7 = User.create!({
  username: "password6",
  email: "password6",
  password: "password6"
});

user8 = User.create!({
  username: "password7",
  email: "password7",
  password: "password7"
});


deckDefault1 = Deck.create!({
  title: "Tap Here To Edit",
  author_id: user1.id,
  })

deckDefault2 = Deck.create!({
  title: "Tap Here To Edit",
  author_id: user2.id,
  })


deck1 = Deck.create!({
  title: "How To Get Into App Academy",
  author_id: user1.id,
  mastery_percentage: 50
})

deck2 = Deck.create!({
  title: "Chemistry",
  author_id: user1.id
})

cardDefault1 = Card.create({
  keyword: "tap to edit",
  body: "tap to edit",
  author_id: user1.id,
  deck_id: deckDefault1.id
  })

cardDefault2 = Card.create({
  keyword: "tap to edit",
  body: "tap to edit",
  author_id: user2.id,
  deck_id: deckDefault2.id
  })

card1 = Card.create!({
  keyword: ".select",
  body: "body1",
  author_id: user1.id,
  deck_id: deck1.id
  })

card2 = Card.create!({
  keyword: ".reject",
  body: "body2",
  author_id: user1.id,
  deck_id: deck1.id
  })

card3 = Card.create!({
  keyword: ".uniq",
  body: "body2",
  author_id: user1.id,
  deck_id: deck1.id
  })

card4 = Card.create!({
  keyword: "electron",
  body: "negatively charged particles",
  author_id: user2.id,
  deck_id: deck2.id
  })

card5 = Card.create!({
  keyword: "protons",
  body: "postively charged particles found in the nucleus",
  author_id: user2.id,
  deck_id: deck2.id
  })

card6 = Card.create!({
  keyword: "neutrons",
  body: "neutral charged particles found in the nucleus",
  author_id: user2.id,
  deck_id: deck2.id
  })


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
tag13 = Tag.create!({name: "7-12"})
tag13 = Tag.create!({name: "university"})

tagging1 = Tagging.create!({deck_id: deck1.id, tag_id: tag7.id})
tagging2 = Tagging.create!({deck_id: deck1.id, tag_id: tag13.id})
tagging3 = Tagging.create!({deck_id: deck2.id, tag_id: tag1.id})
tagging4 = Tagging.create!({deck_id: deck2.id, tag_id: tag13.id})
