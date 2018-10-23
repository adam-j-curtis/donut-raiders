import React from 'react'
import { Link } from 'react-router'

const DonutTile = (props) => {
  return(
    <div>
      <h1><Link to={`/shop/${props.shopId}/donuts/${props.id}`} key={props.id}>{props.name}</Link></h1>
    </div>
  )
}


export default DonutTile
