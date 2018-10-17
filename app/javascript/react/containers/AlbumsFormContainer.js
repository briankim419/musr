import React, { Component } from 'react';
import TextInputField from '../components/TextInputField'

class AlbumsFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      release_date: '',
      artist: '',
      description: ''
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
      description: ''
    })
  };

  handleSubmit(event) {
    event.preventDefault();
    // below has both options for changing strings to integers
    let formPayload = {
      name: this.state.name,
      release_date: this.state.release_date,
      description: this.state.description,
      artist: this.state.artist
    }
    this.props.addNewAlbum(formPayload);
    this.handleClearForm();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <TextInputField
          label='Album Name:'
          name='albumNameTitle'
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
        <input className="button" type="submit" value="Submit" />
      </form>
    )
  }
};

export default AlbumsFormContainer;
