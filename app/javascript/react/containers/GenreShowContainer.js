import React, { Component } from 'react';

class GenreShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    let genreId = this.props.params.id
  }

  render(){
    return(
      <h1>Hello</h1>
    )
  }
}

export default GenreShowContainer;
