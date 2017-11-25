# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create({
  username: "password",
  email: "cynma@gmail.com",
  password: "password"
});

user2 = User.create({
  username: "password1",
  email: "cynma1@gmail.com",
  password: "password1"
});


deck1 = Deck.create({
  title: "How To Get Into App Academy",
  author_id: user1.id,
  mastery_percentage: 50
})

deck2 = Deck.create({
  title: "Chemistry",
  author_id: user2.id
})

card1 = Card.create({
  keyword: ".select",
  body: "body1",
  author_id: user1.id,
  deck_id: deck1.id
  })

card2 = Card.create({
  keyword: ".reject",
  body: "body2",
  author_id: user1.id,
  deck_id: deck1.id
  })

card3 = Card.create({
  keyword: ".uniq",
  body: "body2",
  author_id: user1.id,
  deck_id: deck1.id
  })

card4 = Card.create({
  keyword: "electron",
  body: "negatively charged particles",
  author_id: user2.id,
  deck_id: deck2.id
  })

card5 = Card.create({
  keyword: "protons",
  body: "postively charged particles found in the nucleus",
  author_id: user2.id,
  deck_id: deck2.id
  })

card6 = Card.create({
  keyword: "neutrons",
  body: "neutral charged particles found in the nucleus",
  author_id: user2.id,
  deck_id: deck2.id
  })
