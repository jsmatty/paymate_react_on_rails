class CreateHouses < ActiveRecord::Migration[5.1]
  def change
    create_table :houses do |t|

      t.string "house_nickname"

      t.timestamps
    end
  end
end
