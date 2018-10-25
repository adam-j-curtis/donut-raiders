import React, { Component } from 'react';
import DonutReviewTextBodyField from '../components/DonutReviewTextBodyFieldTile';
import DonutReviewRatingField from '../components/DonutReviewRatingFieldTile';
import DonutReviewPriceField from '../components/DonutReviewPriceFieldTile';

class DonutReviewFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      donutReviewTextBody: '',
      donutReviewRating: '',
      donutReviewPrice: ''
    }
    this.handleNewDonutReviewTextBodyField = this.handleNewDonutReviewTextBodyField.bind(this)
    this.handleNewDonutReviewRatingField = this.handleNewDonutReviewRatingField.bind(this)
    this.handleNewDonutReviewPriceField = this.handleNewDonutReviewPriceField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClear = this.handleClear.bind(this)
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

  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      body: this.state.donutReviewTextBody,
      rating: this.state.donutReviewRating,
      price_range: this.state.donutReviewPrice
    }
    this.props.addNewDonutReview(formPayload)
    this.handleClear(event)
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
