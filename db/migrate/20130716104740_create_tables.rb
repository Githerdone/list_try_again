class CreateTables < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.integer :position
    end
  end
end
