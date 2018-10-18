class AddShopIdToReviews < ActiveRecord::Migration[5.2]
  def up
    add_column :reviews, :shop_id, :integer
  end

  def down
    remove_column :reviews, :shop_id, :integer
  end
end
