import React from 'react'

const ReviewTile = (props) => {

  return(
    <div>
      <h3>Review Number: {props.id}</h3>
      <h3>Rating: {props.rating}</h3>
      <h3>Review: {props.body}</h3>
      <h3>Price Range: {props.price_range}</h3>
      <h3>Post Date: {props.date}</h3>
      <hr/>
    </div>
  )
}

export default ReviewTile;
