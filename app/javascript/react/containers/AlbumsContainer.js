import React, { Component } from 'react';
import AlbumsFormContainer from './AlbumsFormContainer';
import AlbumsIndex from '../components/AlbumsIndex';
import TextInputField from '../components/TextInputField';
import { Link } from 'react-router'
import AlbumTile from '../components/AlbumTile'

class AlbumsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount() {

    fetch(`/api/v1/genres/${this.props.genreId}/albums`)
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
      let fetchedAlbums = body.albums
      this.setState({ albums: fetchedAlbums})


    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
     let albums = this.state.albums.map(album => {
       return(
         <AlbumTile
           key={album.id}
           album={album}
         />
       )
     })
    return(
      <div>
        {albums}
      </div>
    )
  }
};

export default AlbumsContainer;
