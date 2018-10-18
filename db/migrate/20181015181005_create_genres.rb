class CreateGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :genres do |t|
      t.string :name, null: false
      has_many :albums

      t.timestamps null: false
    end
  end
end
