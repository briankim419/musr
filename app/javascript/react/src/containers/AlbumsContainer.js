import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import AlbumsFormContainer from './AlbumsFormContainer';

class AlbumsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const body = JSON.stringify({
      name: this.state.name,
      description: this.state.description
    });
    fetch('/api/v1/board_games/new', {
      credentials: 'same-origin',
      method: 'POST',
      body: body
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ message: body.message })
    })
  }
  onDrop(file) {
    if(file.length == 1) {
      this.setState({ file: file })
    } else {
      this.setState({ message: 'You can only upload one photo per board game.'})
    }
  }
  render() {
     let handleAddNewAlbum = (formPayload) => this.handleSubmit(formPayload)

    return(
      <div>
        <h1>Albums</h1>
        <AlbumsIndex
          albums ={this.state.albums}
        />

        <AlbumFormContainer
          addNewAlbum={handleAddNewAlbum}
        />

      </div>
    )
  }
};

export default AlbumsContainer;
