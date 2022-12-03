puts "🌱 Seeding spices..."

# Seed your database here

users = [
  {first_name: 'Jon', last_name: 'Doe', email: 'e@example.com'},
  {first_name: 'Jane', last_name: 'Kirimara', email: 'e@example.com'},
  {first_name: 'Titus', last_name: 'Nculubi', email: 'mwiti@mail.com'},
  {first_name: 'Eric', last_name: 'Mwenda', email: 'erice@yahoo.com'},
  {first_name: 'Mutwiri', last_name: 'Karimi', email: 'esd@hotmail.com'},
  {first_name: 'Thamana', last_name: 'Kirimi', email: 'sdsdd@eg.com'}
]
users.each do |u|
  Author.create(u)
end

posts = [
  {title: 'Getting started with AWS', content: 'Aws stands for Amazon web services, it is used for hosting web applications on the cloud', author_id: Author.first.id},
  {title: 'Getting started with Node', content: 'Node js is a v8 Javscrip engine, this way we are able to run Javascript on the server', author_id: Author.second.id},
  {title: 'Getting started with React', content: 'React is a javascript frontend framework, it eliminates dom manipulation stress', author_id: Author.third.id},
]


posts.each do |u|
  Post.create(u)
end

puts "✅ Done seeding!"
