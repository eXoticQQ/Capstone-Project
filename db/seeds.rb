# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'pry'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# This will delete any existing rows from the Product and User tables
# so you can run the seed file multiple times without having duplicate entries in your database
puts "Deleting old data..."
Comment.destroy_all
Post.destroy_all
UserFollower.destroy_all
User.destroy_all
# Post.destroy_all
# User.destroy_all
# Comment.destroy_all
# UserFollower.destroy_all

puts "Creating users..."
user1 = User.create(username: "test", password: "password", image: "https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80", email: "test@test.com")
user2 = User.create(username: "vitalii", password: "password", email: "vetal.shtager@gmail.com")


puts "Creating posts..."
posts_array = [
    ["first post", 3, user1.id],
    ["second post", 2, user2.id],
    ["third post", 1, user1.id]
]
posts_array.each do |array|
    Post.create(description: array[0], likes: array[1], user_id: array[2])
end

puts "Creating comments..."
comments_array = [
    [ 3, Faker::Lorem.sentence, Post.first.id, User.first.id],
    [ 4, Faker::Lorem.sentence, Post.second.id, User.second.id],
    [ 5, Faker::Lorem.sentence, Post.first.id, User.first.id]
]
comments_array.each do |array|
    Comment.create(likes: array[0], comment: array[1], post_id: array[2], user_id: array[3])
end

# c1 = Comment.create!(likes: 3, comment: Faker::Lorem.sentence, post: Post.first, user_id: User.first)
# c2 = Comment.create!(likes: 4, comment: Faker::Lorem.sentence, post: Post.first, user_id: User.second)
# c3 = Comment.create!(likes: 5, comment: Faker::Lorem.sentence, post: Post.first, user_id: User.first)

puts "Creating followers..."
f1 = UserFollower.create(user_id: user1.id, follower_id: user2.id)

puts "Seeding done!"
