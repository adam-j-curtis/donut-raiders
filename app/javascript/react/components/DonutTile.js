import React from 'react'
import { Link } from 'react-router'

const DonutTile = (props) => {
  return(
    <div>
      <h1><Link to={`/donut/${props.id}`}>{props.name}</Link></h1>
      <h4>{props.shopName}</h4>
    </div>
  )
}


export default DonutTile
