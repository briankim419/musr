import React from 'react';
import { Link } from 'react-router';

const GenreTile = (props) => {
  return(
    <div id="ap" className="genre-tile  small-12 large-2 columns container text center ">
      <Link to={`/genres/${props.id}`}>
      <button className="button2">
      <p>{props.name}</p>
     </button>
      </Link>
    </div>
  )
}

export default GenreTile;
