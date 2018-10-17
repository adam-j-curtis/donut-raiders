class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.string :body, null: false
      t.string :price_range, null: false
      t.string :photo_url
      t.belongs_to :donut, null: false

      t.timestamps null: false
    end
  end
end
