import React from 'react';
import { Link } from 'react-router';

const GenreTile = (props) => {
  return(
    <div className="genre-tile">
      <Link to={`/genres/${props.id}`}>
        <p>{props.name}</p>
      </Link>
    </div>
  )
}

export default GenreTile;
