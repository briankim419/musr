import React, { Component } from 'react';
<<<<<<< HEAD
=======
import AlbumShow from '../components/AlbumShow';
>>>>>>> ba049f00f2e17993570c901db1b0995b14a46ad9

class AlbumShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      album: {}
=======
      id:"",
      name:"",
      artist:"",
      description:"",
      release_date:"",
      genre:"",
      album_art:""
>>>>>>> ba049f00f2e17993570c901db1b0995b14a46ad9
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
<<<<<<< HEAD
      this.setState({ album: fetchedAlbum })
=======
      this.setState({ id: fetchedAlbum.id, name: fetchedAlbum.name, artist: fetchedAlbum.artist, description: fetchedAlbum.description, release_date: fetchedAlbum.release_date, genre: fetchedAlbum.genre, album_art: fetchedAlbum.album_art })
>>>>>>> ba049f00f2e17993570c901db1b0995b14a46ad9

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
<<<<<<< HEAD

    return(
      <div>
        {this.state.album.name}
      </div>

=======
    debugger;
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
>>>>>>> ba049f00f2e17993570c901db1b0995b14a46ad9
    )
  }
}

export default AlbumShowContainer;
