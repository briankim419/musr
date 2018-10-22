class AddAlbumArtToAlbums < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :album_art, :string
  end
end
