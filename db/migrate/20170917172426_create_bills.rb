class CreateBills < ActiveRecord::Migration[5.1]
  def change
    create_table :bills do |t|
      t.string :type
      t.string :company
      t.string :phone_number
      t.string :account_number
      t.string :name
      t.string :email
      t.references :house, foreign_key: true

      t.timestamps
    end
  end
end
