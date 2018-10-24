import React from 'react';
import { Link } from 'react-router';

const GenreTile = (props) => {
  return(

    <div className="genre-tile large-4 columns ">

      <Link to={`/genres/${props.id}`}>

      <button className="button2">

      <p>{props.name}</p>

     </button>

      </Link>
      </div>

  )
}

export default GenreTile;
