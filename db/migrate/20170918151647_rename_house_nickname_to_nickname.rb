class RenameHouseNicknameToNickname < ActiveRecord::Migration[5.1]
  def change
    rename_column :houses, :house_nickname, :nickname
  end
end
