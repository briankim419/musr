class Album < ApplicationRecord
  validates :name, presence: true
  validates :artist, presence: true
  validates :description, presence: true
  validates :release_date, presence: true
  belongs_to :genre
end
