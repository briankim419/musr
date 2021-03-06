import React from 'react';
import { Link } from 'react-router'


const AlbumTile = props => {

  let name = props.album.name
  let description = props.album.description
  let artist = props.album.artist
  let release = props.album.release_date
  let genreId = props.album.genre.id
  let albumId = props.album.id


  return(

    <div className= " album-tile ">
      <Link to={`/genres/${genreId}/albums/${albumId}`}>
      <div className="albumtilebutton">
        <h1 className="text">{name} - {artist}</h1>
        </div>
      </Link>
    </div>

  )
}

export default AlbumTile;
