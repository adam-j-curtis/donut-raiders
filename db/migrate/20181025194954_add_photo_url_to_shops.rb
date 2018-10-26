class AddPhotoUrlToShops < ActiveRecord::Migration[5.2]
  def change
    add_column :shops, :photo_url, :string
  end
end
