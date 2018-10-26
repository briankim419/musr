class CreateAlbum < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :name, null: false
      t.string :artist, null: false
      t.string :description, null: false
      t.date :release_date, null: false

      t.belongs_to :genre

      t.timestamps null: false
    end
  end
end
