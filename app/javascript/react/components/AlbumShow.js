import React from 'react';
import { browserHistory, Link } from 'react-router';

const AlbumShow = (props) => {
  // let album_artwork = props.album_art.map(art => {
  //   return(
  //     <div className="art">
  //       <p>{art.url}</p>
  //     </div>
  //   )
  // })
  // debugger;
  // let imageUrl
  // if (props.url) {
  //   imageUrl = props.album_art
  // } else {
  //   imageUrl = ""
  // }

  // <img src={`${props.album_art.url}`} />
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


        <div className="album-name-description large-6 columns">

          <div className="album-name">
            {props.name}
          </div>

          <div className="album-description">
          {props.description}
          </div>


        </div>
      </div>
  )
}

export default AlbumShow;
