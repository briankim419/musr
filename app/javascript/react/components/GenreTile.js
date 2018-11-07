import React from 'react';
import { Link } from 'react-router';

const GenreTile = (props) => {
  return(

    <div className="genre-tile small-12 large-4 columns container  ">

      <Link to={`/genres/${props.id}`} >

      <button id= {props.name} className="button2 tint t6">
      <p>{props.name}</p>
     </button>

      </Link>
      </div>

  )
}

export default GenreTile;
