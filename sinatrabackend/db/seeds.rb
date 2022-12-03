puts "🌱 Seeding spices..."

# Seed your database here

users = [
  {first_name: 'Jon', last_name: 'Doe', email: 'e@example.com'},
  {first_name: 'Jane', last_name: 'Doe', email: 'e@example.com'}
]

posts = [
  {title: 'Getting started with AWS', content: 'Aws stands for Amazon web services, it is used for hosting web applications on the cloud'},
  {title: 'Getting started with Node', content: 'Node js is a v8 Javscrip engine, this way we are able to run Javascript on the server. before node we could only run Js on the browser'},
]

users.each do |u|
  Author.create(u)
end

posts.each do |u|
  Post.create(u)
end

puts "✅ Done seeding!"
