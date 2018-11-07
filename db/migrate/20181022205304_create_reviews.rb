class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.string :body, null: false
      t.integer :votes 

      t.belongs_to :album, null: false
      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end
