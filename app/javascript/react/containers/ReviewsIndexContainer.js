import React, { Component } from 'react';
import AlbumsContainer from './AlbumsContainer'
import ReviewsFormContainer from './ReviewsFormContainer'
import StarRatingComponent from 'react-star-rating-component';

class ReviewsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
    this.addNewReview = this.addNewReview.bind(this);
  }
  addNewReview(reviewPayload) {
   let newReviews = this.state.reviews.concat(reviewPayload)
   this.setState({ reviews: newReviews })
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
      this.setState({ reviews: fetchedReviews.reviews})

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let allReviews = this.state.reviews
    debugger
    let reviewList = allReviews.map(review =>
       <div className = "reviews">
        <div className = "reviews-content">
          <StarRatingComponent
            name="app4"
            editing={false}
            starCount={5}
            value={review.rating} />
        <h1>{review.body}</h1>
        <h1>{review.user.user_name}</h1>
        </div>
       </div>
     )
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
