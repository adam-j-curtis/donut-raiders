import React, { Component } from 'react'
import ReviewTile from '../components/ReviewTile'


class DonutShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      donut: [],
      shop: [],
      reviews: []
    }
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

  render(){
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
      <div className="donut-show">
        <h1>{donutdata.donut.name}</h1>
        <h1>{donutdata.shop.name}</h1>
        <h4>{donutdata.shop.address}</h4>
        <h4>{donutdata.shop.city}</h4>
        <h4>{donutdata.shop.state}</h4>
        <h4>{donutdata.shop.url}</h4>
        <hr/>
        <h2>Reviews:</h2>
        <hr/>
        {reviews}
      </div>
    )
  }
}

export default DonutShow
