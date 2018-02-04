class DeleteRenameSchema < ActiveRecord::Migration[5.1]
  def change
    remove_column :cards, :author_id
    remove_column :cards, :user_rating

    rename_column :cards, :keyword, :question
    rename_column :cards, :body, :answer
  end
end
