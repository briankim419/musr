import React, { Component } from 'react';
import AlbumShow from '../components/AlbumShow';

class AlbumShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      name:"",
      artist:"",
      description:"",
      release_date:"",
      genre:"",
      album_art:""
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
      this.setState({ id: fetchedAlbum.id, name: fetchedAlbum.name, artist: fetchedAlbum.artist, description: fetchedAlbum.description, release_date: fetchedAlbum.release_date, genre: fetchedAlbum.genre, album_art: fetchedAlbum.album_art })

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    return(
      <AlbumShow
        id={this.state.id}
        name={this.state.name}
        artist={this.state.artist}
        description={this.state.description}
        release_date={this.state.release_date}
        genre={this.state.genre}
        album_art={this.state.album_art.url}
        />
    )
  }
}

export default AlbumShowContainer;
