class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
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
    { message: "create a post" }.to_json
  end

  delete '/posts/:id' do
    { message: "delete a post by id" }.to_json
  end

  # Authors
  get '/authors' do
    { message: "Get all authors" }.to_json
  end

  get '/authors/:id' do
    { message: "get a author by id" }.to_json
  end

  post '/authors' do
    { message: "create a author" }.to_json
  end

  delete '/authors/:id' do
    { message: "delete a author by id" }.to_json
  end
end
