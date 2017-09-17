class AddHouseNicknameToHouse < ActiveRecord::Migration[5.1]
  def change
    add_column :houses, :house_nickname, :string
  end
end
