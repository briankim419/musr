class Album < ApplicationRecord
  validates :name, presence: true
  validates :artist, presence: true
  validates :description, presence: true
  validates :release_date, presence: true
  belongs_to :genre
<<<<<<< HEAD
=======
  has_many :reviews

>>>>>>> 9f213e0a9394af84b706a21731746ad939d13f68
end
