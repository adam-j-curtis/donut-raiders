class RemoveCategoriesFromDonuts < ActiveRecord::Migration[5.2]
  def up
    remove_column :donuts, :category, :string, null: false
  end

  def down
    add_column :donuts, :category, :string, null: false
  end

end
