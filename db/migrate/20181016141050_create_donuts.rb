class CreateDonuts < ActiveRecord::Migration[5.2]
  def change
    create_table :donuts do |t|
      t.belongs_to :shop, null: false
      t.string :name, null: false
      t.string :category, null: false

      t.timestamps null: false
    end
  end
end
