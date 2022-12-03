class Post < ActiveRecord::Base
  belongs_to :author

  def first_name
    self.author.first_name
  end
end