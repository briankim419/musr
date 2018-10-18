import React from 'react';
import { Link } from 'react-router'
import AlbumTile from './AlbumTile'

const AlbumsIndex = props => {
    let albums = props.albums.map(album => {
      return(
        <AlbumTile
          key={album.id}
          album={album}
        />
      )
    })
    return(
      <div>
      {albums}
      </div>
    )
}

export default AlbumsIndex;
