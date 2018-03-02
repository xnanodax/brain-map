class RefactorTables < ActiveRecord::Migration[5.1]
  def change
    add_index :cards, :deck_id
    remove_index :studyscores, [:tester_id, :card_id, :learning_score]
    add_index :studyscores, [:tester_id, :card_id], unique: true
  end
end
