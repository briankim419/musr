import React from 'react';
import { browserHistory, Link } from 'react-router';

const AlbumShow = (props) => {

  return(
    <div className="row">

      <div className="album-artist-release_date large-6 columns">
        <div className="artist">
          {props.artist}
        </div>

        <div className="release_date">
          Release Date: {props.release_date}
        </div>

        <div className="album_art">
        <img src={props.album_art} />
        </div>

      </div>



<div className="album-name-description large-6 columns  ">
          <div className="album-name">
            {props.name}
          </div>

          <div className="album-description album-description-tile ">
          {props.description}
          </div>


        </div>
      </div>
  )
}

export default AlbumShow;
