import React, { Component } from 'react';
import AlbumsContainer from './AlbumsContainer'
import ReviewsFormContainer from './ReviewsFormContainer'

class ReviewsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
    this.handleUpClick = this.handleUpClick.bind(this);
    this.handleDownClick = this.handleDownClick.bind(this);
    this.addNewReview = this.addNewReview.bind(this);
  }
  addNewReview(reviewPayload) {
   let newReviews = this.state.reviews.concat(reviewPayload)
   this.setState({ reviews: newReviews })
  }

  handleUpClick(event) {
    event.preventDefault();
    let upVote = this.state.votes
    upVote++
    this.setState({ votes: upVote })
    let formPayload = {
      votes: this.state.votes
    };
    fetch(`/api/v1/genres/${this.props.genreId}/albums/${this.props.albumId}/reviews/1/edit`, {
      credentials: 'same-origin',
      method: 'EDIT',
      body: (formPayload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  handleDownClick(event) {
    event.preventDefault();
    let upVote = this.state.votes
    upVote--
    this.setState({ votes: upVote })
  }

  componentDidMount() {
    fetch(`/api/v1/genres/${this.props.genreId}/albums/${this.props.albumId}/reviews`)
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
    .then(fetchedReviews => {
      this.setState({ reviews: fetchedReviews})

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }



  render(){
    let allReviews = this.state.reviews
    let reviewList = allReviews.map(review => <div><h1>{review.body}</h1><h2>{review.rating}</h2></div>)
    return(
      <div>
        <ReviewsFormContainer
          genreId={this.props.genreId}
          albumId={this.props.albumId}
          addNewReview={this.addNewReview}
          />
        {reviewList}
      </div>

    )
  }
}

export default ReviewsIndexContainer;
