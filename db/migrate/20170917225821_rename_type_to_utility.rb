class RenameTypeToUtility < ActiveRecord::Migration[5.1]
  def change
    rename_column :bills, :type, :utility
  end
end
