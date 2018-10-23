import React, { Component } from 'react';
import TextInputField from '../components/TextInputField'
import { Route, Redirect } from 'react-router'
import { push } from 'react-router'
import { browserHistory } from 'react-router'
import StarRatingComponent from 'react-star-rating-component';


class ReviewsFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      body: '',
      votes: '',
      errors: {},
      rating_half_star: 3.5
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateBodyInput = this.validateBodyInput.bind(this);
    this.validateRatingInput = this.validateRatingInput.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
    this.onStarClickHalfStar = this.onStarClickHalfStar.bind(this);
  }

    onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
      }

    onStarClickHalfStar(nextValue, prevValue, name, e) {
      const xPos = (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;

      if (xPos <= 0.5) {
        nextValue -= 0.5;
      }

      console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
      // console.log(e);
      this.setState({rating_half_star: nextValue});
    }

  validateBodyInput(input) {
      if (input.trim() === '') {
        let newError = { body: "You must enter a Body!" }
        this.setState({ errors: Object.assign({}, this.state.errors, newError) })
        return false
      } else {
        let errorState = this.state.errors
        delete errorState.inputError
        this.setState({ errors: errorState})
        return true
      }
    }

  validateRatingInput(input) {
      if (input === '') {
        let newError = { rating: "You must enter a Rating!" }
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
      rating: '',
      body: '',
      votes: ''
    })
  };

  handleSubmit(event) {
    event.preventDefault();
    if((this.validateBodyInput(this.state.body)) && (this.validateRatingInput(this.state.rating)) ) {

    let body = new FormData()
    body.append("body", this.state.body)
    body.append("rating", this.state.rating)

    fetch(`/api/v1/genres/${this.props.params.genre_id}/albums/${this.props.params.album_id}/reviews`, {
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
      console.log(body)
      browserHistory.push(`/genres/${this.props.params.genre_id}/albums/${this.props.params.album_id}`)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    }
  }

  render() {
    const { rating } = this.state;
    let errorDiv;
    let errorItems;

    if(Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className='error'>{errorItems}</div>
    }

    return(
      <div>{errorDiv}
        <form onSubmit={this.handleSubmit}>
          <h2>Rating from state: {rating}</h2>
           <StarRatingComponent
             name="rate1"
             starCount={5}
             value={rating}
             onStarClick={this.onStarClick.bind(this)}
             onStarClickHalfStar={this.onStarClickHalfStar.bind(this)}
           />

         <label>Body</label>
         <input
           name='body'
           type = 'textarea'
           style={{ height: 200, width: 1000 }}
           value={this.state.body}
           onChange={this.handleChange}
         />
        <input className="button" type="submit" value="Submit" />
        </form>

      </div>
    )
  }
};

export default ReviewsFormContainer;
