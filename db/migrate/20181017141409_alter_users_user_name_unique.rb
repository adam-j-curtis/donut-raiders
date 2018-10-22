class AlterUsersUserNameUnique < ActiveRecord::Migration[5.2]

  def up
    change_column :users, :user_name, :string, unique: true
  end


  def down
    change_column :users, :user_name, :string
  end
end
