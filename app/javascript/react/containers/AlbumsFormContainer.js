import React, { Component } from 'react';
import TextInputField from '../components/TextInputField'
import { Route, Redirect } from 'react-router'
import { push } from 'react-router'
import { browserHistory } from 'react-router'
import Dropzone from 'react-dropzone';


class AlbumsFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      release_date: '',
      artist: '',
      description: '',
      genre_id: '',
      errors: {},
      file: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateAlbumInput = this.validateAlbumInput.bind(this);
    this.validateArtistInput = this.validateArtistInput.bind(this);
    this.validateDateInput = this.validateDateInput.bind(this);
    this.validateDescriptionInput = this.validateDescriptionInput.bind(this);
    this.validateGenreInput = this.validateGenreInput.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  validateAlbumInput(input) {
      if (input.trim() === '') {
        let newError = { title: "You must enter an Album Name!" }
        this.setState({ errors: Object.assign({}, this.state.errors, newError) })
        return false
      } else {
        let errorState = this.state.errors
        delete errorState.inputError
        this.setState({ errors: errorState})
        return true
      }
    }

  validateArtistInput(input) {
      if (input.trim() === '') {
        let newError = { title: "You must enter an Artist!" }
        this.setState({ errors: Object.assign({}, this.state.errors, newError) })
        return false
      } else {
        let errorState = this.state.errors
        delete errorState.inputError
        this.setState({ errors: errorState})
        return true
      }
    }

  validateDateInput(input) {
      if (input === '') {
        let newError = { title: "You must enter a Date!" }
        this.setState({ errors: Object.assign({}, this.state.errors, newError) })
        return false
      } else {
        let errorState = this.state.errors
        delete errorState.inputError
        this.setState({ errors: errorState})
        return true
      }
    }

  validateDescriptionInput(input) {
      if (input.trim() === '') {
        let newError = { title: "You must enter a Description!" }
        this.setState({ errors: Object.assign({}, this.state.errors, newError) })
        return false
      } else {
        let errorState = this.state.errors
        delete errorState.inputError
        this.setState({ errors: errorState})
        return true
      }
    }

  validateGenreInput(input) {
      if (input === '') {
        let newError = { title: "You must select a Genre!" }
        this.setState({ errors: Object.assign({}, this.state.errors, newError) })
        return false
      } else {
        let errorState = this.state.errors
        delete errorState.inputError
        this.setState({ errors: errorState})
        return true
      }
    }


  handleChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value })
  }

  handleClearForm() {
    this.setState({
      name: '',
      release_date: '',
      artist: '',
      description: '',
      genre_id: ''
    })
  };

  handleSubmit(event) {
    event.preventDefault();
    if((this.validateAlbumInput(this.state.name)) && (this.validateArtistInput(this.state.artist)) && (this.validateDateInput(this.state.release_date)) && (this.validateDescriptionInput(this.state.description)) && (this.validateGenreInput(this.state.genre_id))) {

    let body = new FormData()
    body.append("name", this.state.name)
    body.append("release_date", this.state.release_date)
    body.append("artist", this.state.artist)
    body.append("description", this.state.description)
    body.append("genre_id", this.state.genre_id)
    body.append("album_art", this.state.file[0])

    fetch(`/api/v1/albums`, {
      credentials: 'same-origin',
      method: 'POST',
      body: body,
      headers: {
        'Accept': 'application/json' },
        credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      browserHistory.push(`/genres/${this.state.genre_id}`)
      // /${body.album.id}
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    }
  }

  onDrop(file) {
    if(file.length == 1) {
      this.setState({ file: file })
    } else {
      this.setState({ message: 'You can only upload one photo per board game.'})
    }
  }

  render() {
    let errorDiv;
    let errorItems;

    if(Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className='error'>{errorItems}</div>
    }


    return(
      <div className="  ">
      <h1 className="center title-font"> New Album</h1>


      <div className="small-11 large-centered columns wrapperform">{errorDiv}
      <form onSubmit={this.handleSubmit}>
        <label className="floatL formtext">Album Name</label>
        <div className="field  ">
        <input
          name='name'
          type = 'text'
          value={this.state.name}
          onChange={this.handleChange}
        />
        </div>
      <label className="floatL formtext">Release Date</label>
      <div className="field">
      <input
          label='Release Date:'
            type = 'date'
            name='release_date'
          value={this.state.release_date}
          onChange={this.handleChange}
        />
        </div>
      <label className="floatL formtext">Artist</label>
      <div className="field">
      <input
          label='Artist:'
          name='artist'
          type = 'text'
          value={this.state.artist}
          onChange={this.handleChange}
        />
        </div>
      <label className="floatL formtext">Description</label>
      <div className="field">
      <input
        label='Description:'
        type = 'text'
        name='description'
        value={this.state.description}
        onChange={this.handleChange}
        />
        </div>
      <label className="floatL formtext ">Genre</label>
      <div className="field ">
        <div label = 'Genre' name = 'genre_id' value={this.state.genre_id} onChange={this.handleChange}>
          <input type="radio" value="1" name="genre_id"/> Rock
          <br></br>

          <input type="radio" value="2" name="genre_id"/> Hip-Hop
          <input type="radio" value="3" name="genre_id"/> Country
          <input type="radio" value="4" name="genre_id"/> Electronic
          <input type="radio" value="5" name="genre_id"/> Jazz
          <input type="radio" value="6" name="genre_id"/> Classical
        </div>
        </div>

        <section className="imgalign">

          <div className="dropzone container" name = 'album_art'>
            <Dropzone onDrop={this.onDrop}>
              <p>Try dropping some files here, or click to select files to upload.</p>
            </Dropzone>
          </div>

          </section>
          <div className="center">

          <aside>

            <h2 className=" nopaddingBottom">Selected Files:</h2>
            <ul>
              {
                this.state.file.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
          </aside>

        <input className="button" type="submit" value="Submit" />
        </div>

      </form>
      </div>
      </div>
    )
  }
};

export default AlbumsFormContainer;
