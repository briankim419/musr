import React from 'react';
import AlbumTile from './AlbumTile'

const AlbumIndex = props => {

  let albums = props.albums.map(album => {
    return(
      <AlbumTile
        key={album.id}
        album={album}
      />
    )
  })
  return(
    <ul>
      {albums}
    </ul>
  );
}

export default MoviesIndex;
