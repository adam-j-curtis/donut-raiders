import React, { Component } from 'react';
import DonutReviewTextBodyField from '../components/DonutReviewTextBodyFieldTile';
import DonutReviewRatingField from '../components/DonutReviewRatingFieldTile';
import DonutReviewPriceField from '../components/DonutReviewPriceFieldTile';
import DonutShow from './DonutShow';

class DonutReviewFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      donutReviewTextBody: '',
      donutReviewRating: '',
      donutReviewPrice: '',
      allTheReviews: []
    }
    this.handleNewDonutReviewTextBodyField = this.handleNewDonutReviewTextBodyField.bind(this)
    this.handleNewDonutReviewRatingField = this.handleNewDonutReviewRatingField.bind(this)
    this.handleNewDonutReviewPriceField = this.handleNewDonutReviewPriceField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.addNewDonutReview = this.addNewDonutReview.bind(this)
  }

    handleNewDonutReviewTextBodyField(event) {
      this.setState({ donutReviewTextBody: event.target.value})
    }

    handleNewDonutReviewRatingField(event) {
      this.setState({ donutReviewRating: event.target.value})
    }

    handleNewDonutReviewPriceField(event) {
      this.setState({ donutReviewPrice: event.target.value})
    }

  componentDidMount() {
    fetch(`/api/v1/shops/${this.props.shopId}/donuts/${this.props.donutId}`)
      .then(response => {
        let parsed = response.json()
        return parsed
      })
      .then(parsedDonutShowPage => {
        this.setState({ allTheReviews: parsedDonutShowPage.donut.reviews })
      })
  }

  addNewDonutReview(formPayload) {
    fetch(`/api/v1/shops/${this.props.shopId}/donuts/${this.props.donutId}/reviews`, {
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: {
        'Accept':  'application/json',
        'Content-Type': 'application/json'},
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
          let newAllTheReviews = this.state.allTheReviews.concat(body.donut.reviews)
          console.log('First debugger - after newAllTheReviews')
          debugger;
          this.setState({ allTheReviews: newAllTheReviews})
          debugger;
          console.log('why is state not resetting?')

        })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleSubmit(event) {

    event.preventDefault();
    let formPayload = {
      donutReviewTextBody: this.state.donutReviewTextBody,
      donutReviewRating: this.state.donutReviewRating,
      donutReviewPrice: this.state.donutReviewPrice,
    }
    this.addNewDonutReview(formPayload)

  }

  handleClear(event) {
    event.preventDefault();
    this.setState({
      donutReviewTextBody: '',
      donutReviewRating: '',
      donutReviewPrice: '',
    })
  }

  render() {
    console.log(`consoling log from render`)


    let handleNewDonutReview = (formPayload) => this.addNewDonutReview(formPayload)

    return(
      <form onSubmit={this.handleSubmit} >
        <DonutReviewTextBodyField
          content={this.state.donutReviewTextBody}
          label="Donut Review Text Body"
          name="donut-review-text-body"
          handleNewDonutReviewTextBodyField={this.handleNewDonutReviewTextBodyField}
        />
        <DonutReviewRatingField
          content={this.state.donutReviewRating}
          label="Donut Review Rating"
          name="donut-review-rating"
          handleNewDonutReviewRatingField={this.handleNewDonutReviewRatingField}
        />
        <DonutReviewPriceField
          content={this.state.donutReviewPrice}
          label="Donut Review Price"
          name="donut-review-price"
          handleNewDonutReviewPriceField={this.handleNewDonutReviewPriceField}
        />
        <div className="button-group">
          <button className="button" onClick={this.handleClear} >Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default DonutReviewFormContainer;
