class CreateDecks < ActiveRecord::Migration[5.1]
  def change
    create_table :decks do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.integer :mastery_percentage, default: 0

      t.timestamps
    end
    add_index :decks, :title
    add_index :decks, :author_id
  end
end
