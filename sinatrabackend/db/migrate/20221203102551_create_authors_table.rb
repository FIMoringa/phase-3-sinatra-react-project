class CreateAuthorsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :authors do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
