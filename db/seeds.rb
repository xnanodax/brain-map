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
#
