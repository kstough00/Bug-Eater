class CreateBugs < ActiveRecord::Migration[6.0]
  def change
    create_table :bugs do |t|
      t.string :title
      t.string :description
      t.integer :severity
      t.boolean :resolved

      t.timestamps
    end
  end
end
