class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :description, :release_date, :genre_id, :album_art
  belongs_to :genre
end
