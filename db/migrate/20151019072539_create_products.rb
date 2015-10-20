class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :title
      t.string :color
      t.string :image
      t.decimal :price, precision: 8, scale: 2
      t.text :description

      t.timestamps null: false
    end
  end
end
