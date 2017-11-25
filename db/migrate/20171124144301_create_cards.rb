class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :keyword, null: false
      t.text :body, null: false
      t.integer :user_rating, default: 0
      t.integer :author_id, null: false
      t.integer :deck_id, null: false

      t.timestamps
    end
    add_index :cards, :user_rating
    add_index :cards, :author_id
  end
end
