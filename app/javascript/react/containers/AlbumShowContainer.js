import React, { Component } from 'react';
import AlbumShow from '../components/AlbumShow';
import ReviewsIndexContainer from '../containers/ReviewsIndexContainer';

class AlbumShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

      album: {},
      id:"",
      name:"",
      artist:"",
      description:"",
      release_date:"",
      genre:"",
      album_art:"",
      error: "",
      reviews: []

    }
  }


  // postNewReview

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
      if(body.error) {
        this.setState({ error: body.error })
      } else {
        let fetchedAlbum = body.album
        this.setState({ id: fetchedAlbum.id, name: fetchedAlbum.name, artist: fetchedAlbum.artist, description: fetchedAlbum.description, release_date: fetchedAlbum.release_date, genre: fetchedAlbum.genre, album_art: fetchedAlbum.album_art })
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }



  render(){
    
    let output;
    let yourErrorDiv = this.state.error

    if(this.state.error) {
      output = <h1>{yourErrorDiv}</h1>

    } else {
      output = <AlbumShow
        id={this.state.id}
        name={this.state.name}
        artist={this.state.artist}
        description={this.state.description}
        release_date={this.state.release_date}
        genre={this.state.genre}
        album_art={this.state.album_art}
        />
    }

    return(
      <div>
      {output}
      <ReviewsIndexContainer
        genreId = {this.props.params.genre_id}
        albumId = {this.props.params.id}
        />
      </div>
    )
  }
}

export default AlbumShowContainer;
