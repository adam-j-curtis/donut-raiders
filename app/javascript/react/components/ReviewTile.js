import React from 'react'

const ReviewTile = (props) => {

  return(
    <div key={props.id} className="text-center review-tile">
      <div className="">
        <i className="far fa-sticky-note fa-4x"></i>
        <h2>{props.body}</h2>
        <h3>Rating: {props.rating}</h3>
        <h3>Price Range: {props.price_range}</h3>
        <h3>Post Date: {props.date}</h3>
      </div>
      <hr/>
    </div>
  )
}

export default ReviewTile;
