class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Welcome to my application" }.to_json
  end

  get '/posts' do
    posts = Post.all
    posts.to_json
  end

  get '/posts/:id' do
    post = Post.find(params[:id])
    post.to_json
  end



  post '/posts' do
    post = Post.create(
      title: params[:title],
      content: params[:content],
  )
    { message: "post successfully created", post:post }.to_json
  end



  delete '/posts/:id' do
    post = Post.find(params[:id])
    post.destroy

    { message: "post deleted successfully" , post:post}.to_json
  end

  # Authors
  get '/authors' do
    authors = Author.all
    authors.to_json
  end

  get '/authors/:id' do
    author = Author.find(params[:id])
    author.to_json
  end

  post '/authors' do
    author = Author.create(
      first_name: params[:first_name],
      last_name: params[:last_name],
      email: params[:email],
  )
    { message: "author successfully created", author:author }.to_json
  end

  delete '/authors/:id' do
    author = Author.find(params[:id])
    author.destroy

    { message: "author deleted successfully" }.to_json
  end
end
