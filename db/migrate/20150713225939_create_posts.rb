class CreatePosts < ActiveRecord::Migration
  def change
      drop_table :posts
    create_table :posts do |t|
      t.text :description
      t.integer :like_count
      t.integer :comment_count
      t.string :image_url
      t.string :thumbnail_url
      t.string :profile_image_url
      t.string :user_name

      t.timestamps null: false
    end
  end
end
