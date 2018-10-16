import React from 'react';

const AlbumTile = props => {
  let name = props.album.name
  let description = props.album.description
  let artist = props.album.artist
  let release = props.album.release_date


  return(
    <li>{name}</li>
    <li>{description}</li>
    <li>{artist}</li>
    <li>{release}</li>

  )
}

export default AlbumTile;
