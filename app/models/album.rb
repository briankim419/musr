class Album < ApplicationRecord
<<<<<<< HEAD
=======
  mount_uploader :album_art, AlbumArtUploader

>>>>>>> ba049f00f2e17993570c901db1b0995b14a46ad9
  validates :name, presence: true
  validates :artist, presence: true
  validates :description, presence: true
  validates :release_date, presence: true
<<<<<<< HEAD
  belongs_to :genre
=======

  belongs_to :genre

>>>>>>> ba049f00f2e17993570c901db1b0995b14a46ad9
end
