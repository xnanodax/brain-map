class CreateStudyscores < ActiveRecord::Migration[5.1]
  def change
    create_table :studyscores do |t|
      t.integer :tester_id, null: false
      t.integer :card_id, null: false
      t.integer :learning_score, default: 0

      t.timestamps
    end
    add_index :studyscores, [:tester_id, :card_id, :learning_score], unique: true
  end
end
