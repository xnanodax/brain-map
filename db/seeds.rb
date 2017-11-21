# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = {
  username: "password",
  email: "cynma@gmail.com",
  password: "password"
}

user2 = {
  username: "password1",
  email: "cynma1@gmail.com",
  password: "password1"
}

User.create([user1, user2])
