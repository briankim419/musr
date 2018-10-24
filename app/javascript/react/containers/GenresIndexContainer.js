import React, { Component } from 'react'
import GenreTile from '../components/GenreTile'
class GenresIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/genres')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        error = new Error(message);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      let fetchedGenres = body.genres
      this.setState({ genres: fetchedGenres})

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let genres = this.state.genres.map(genre => {
      return(

        <GenreTile
          key={genre.id}
          id={genre.id}
          name={genre.name}

        />
      )
    })

    return(
   <div className="center">
      <h1>Pick Your Genre</h1>

      <div id="">
      {genres}
    </div>
    </div>
    )
  }
}




export default GenresIndexContainer;
