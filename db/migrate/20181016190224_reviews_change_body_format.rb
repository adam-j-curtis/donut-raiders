class ReviewsChangeBodyFormat < ActiveRecord::Migration[5.2]
  def up
    change_column :reviews, :body, :text, null: false
  end

  def down
    change_column :reviews, :body, :string, null: false
  end
end
