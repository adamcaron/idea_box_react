class CreateIdeas < ActiveRecord::Migration
  def change
    create_table :ideas do |t|
      t.string :title
      t.string :body
      t.integer :quality, default: 0, null: false

      t.timestamps null: false
    end
  end
end
