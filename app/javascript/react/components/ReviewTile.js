import React from 'react'

const ReviewTile = (props) => {

  return(
    <div className="text-center review-tile">
      <div className="">
        <h3>Rating: {props.rating}</h3>
        <h3>Review: {props.body}</h3>
        <h3>Price Range: {props.price_range}</h3>
        <h3>Post Date: {props.date}</h3>
      </div>
      <hr/>
    </div>
  )
}

export default ReviewTile;
