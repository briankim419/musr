class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :description, :release_date, :genre_id, :album_art, :current_user
  belongs_to :genre
end
