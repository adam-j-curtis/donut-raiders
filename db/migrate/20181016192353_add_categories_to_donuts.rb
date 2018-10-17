class AddCategoriesToDonuts < ActiveRecord::Migration[5.2]
  def change
    add_column :donuts, :category_id, :integer, null: false
  end
end
