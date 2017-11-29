class CreateMasteries < ActiveRecord::Migration[5.1]
  def change
    create_table :masteries do |t|
      t.integer :deck_id, null: false
      t.integer :user_id, null: false
      t.integer :mastery_score, default: 0

      t.timestamps
    end
    add_index :masteries, [:user_id, :deck_id, :mastery_score], unique: true
  end
end
