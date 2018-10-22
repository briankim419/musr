import React, { Component } from 'react';

class AlbumShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      album: {}
    }
  }

  componentDidMount() {
    fetch(`/api/v1/genres/${this.props.params.genre_id}/albums/${this.props.params.id}`)
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
      let fetchedAlbum = body.album
      this.setState({ album: fetchedAlbum })

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){

    return(
      <div>
        {this.state.album.name}
      </div>

    )
  }
}

export default AlbumShowContainer;
