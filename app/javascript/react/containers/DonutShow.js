import React, { Component } from 'react'
import ReviewTile from '../components/ReviewTile'
import DonutReviewFormContainer from './DonutReviewFormContainer'

class DonutShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      donut: [],
      shop: [],
      reviews: []
    }
    this.addNewDonutReview = this.addNewDonutReview.bind(this);
  }

  componentDidMount(){
    fetch(`/api/v1/shops/${this.props.params.id[0]}/donuts/${this.props.params.id[1]}`)
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
      this.setState({ donut: body.donut, shop: body.donut.shop, reviews: body.donut.reviews})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  addNewDonutReview(formPayload) {
    fetch(`/api/v1/shops/${this.props.params.id[0]}/donuts/${this.props.params.id[1]}/reviews`, {
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
          this.setState({ reviews: body.donut.reviews})
        })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){

    let handleNewDonutReview = (formPayload) => this.addNewDonutReview(formPayload)

    let donutdata = this.state
    let reviews = donutdata.reviews.map(review => {
      return(
        <ReviewTile
          id = {review.id}
          key = {review.id}
          body = {review.body}
          photo_url = {review.photo_url}
          price_range = {review.price_range}
          rating = {review.rating}
          date = {review.created_at}
          />
      )
    })

    return (
      <div>
        <h1>Donut Name: {donutdata.donut.name}</h1>
        <h1>Purchased At: {donutdata.shop.name}</h1>
        <h4>{donutdata.shop.address}</h4>
        <h4>{donutdata.shop.city}</h4>
        <h4>{donutdata.shop.state}</h4>
        <h4>{donutdata.shop.url}</h4>
        <hr/>
        {this.props.children}
        <DonutReviewFormContainer
          addNewDonutReview={handleNewDonutReview}
        />
        <hr/>
        <h2>Reviews:</h2>
        <hr/>
        {reviews}
      </div>
    )
  }
}

export default DonutShow
