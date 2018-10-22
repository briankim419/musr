import React, { Component } from 'react';
import AlbumsContainer from './AlbumsContainer'

class GenreShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: {},
      albums: []
    }
  }

  componentDidMount() {
    let genreId = this.props.params.id
    fetch(`/api/v1/genres/${genreId}`)
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
      let fetchedGenre = body
      this.setState({ genre: fetchedGenre})

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    return(
      <div className="container" >
        <h1>{this.state.genre.name}</h1>
        <AlbumsContainer
          genreId = {this.props.params.id}
        />
      </div>

    )
  }
}

export default GenreShowContainer;
