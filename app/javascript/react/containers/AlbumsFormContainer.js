import React, { Component } from 'react';
import TextInputField from '../components/TextInputField'

class AlbumsFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      release_date: '',
      artist: '',
      description: '',
      genre_id: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    let formPayload = {
      name: this.state.name,
      release_date: this.state.release_date,
      artist: this.state.artist,
      description: this.state.description
    };
    fetch('/api/v1/albums', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: { 'Content-Type': 'application/json' }
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
        debugger
        this.setState({ fortune: body.fortune.text });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <TextInputField
          label='Album Name:'
          name='name'
          value={this.state.name}
          handleChange={this.handleChange}
        />
        <TextInputField
          label='Release Date:'
          name='release_date'
          value={this.state.release_date}
          handleChange={this.handleChange}
        />
        <TextInputField
          label='Artist:'
          name='artist'
          value={this.state.artist}
          handleChange={this.handleChange}
        />
        <TextInputField
          label='Description:'
          name='description'
          value={this.state.description}
          handleChange={this.handleChange}
        />
        <TextInputField
          label='Genre:'
          name='genre_id'
          value={this.state.genre_id}
          handleChange={this.handleChange}
        />
        <input className="button" type="submit" value="Submit" />
      </form>
    )
  }
};

export default AlbumsFormContainer;
