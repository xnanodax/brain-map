class RemoveMasteryPercentageFromDeckModel < ActiveRecord::Migration[5.1]
  def change
    remove_column :decks, :mastery_percentage
  end
end
