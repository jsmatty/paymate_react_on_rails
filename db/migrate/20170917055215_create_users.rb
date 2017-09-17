class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :name
      t.string :username
      t.string :birthday
      t.text :bio
      t.references :house, foreign_key: true

      t.timestamps
    end
  end
end
