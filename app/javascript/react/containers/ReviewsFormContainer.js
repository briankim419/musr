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

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateBodyInput = this.validateBodyInput.bind(this);
    this.validateRatingInput = this.validateRatingInput.bind(this);
    this.onStarClick = this.onStarClick.bind(this);

  }

  onStarClick(nextValue, prevValue, name) {
  this.setState({rating: nextValue});
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

      this.props.addNewReview({rating: this.state.rating, body: this.state.body})
      this.handleClearForm()


      fetch(`/api/v1/genres/${this.props.genreId}/albums/${this.props.albumId}/reviews`, {
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
        //  instead of the below, you want to add the `body.review` to the existing list in state
        // Have a function in ReviewsIndexContainer called `addNewReview` that takes in a review and adds it (concat) to `this.state.reviews`
        // Pass that function down as a prop to ReviewsFormContainer
        // Call that function here:
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
          <h3 className="ratingtitle">Rating: {rating}</h3>
           <StarRatingComponent
             name="rate1"
             starCount={5}
             value={rating}
             onStarClick={this.onStarClick.bind(this)}
           />
           <div className="reviewtile">
                    <label className="reviewfont">What are your opinions on this album?</label>
         <input
           name='body'
           type = 'textarea'
           value={this.state.body}
           style={{ height: 200, width: 650 }}
           onChange={this.handleChange}
         />
         </div>
        <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
};

export default ReviewsFormContainer;
