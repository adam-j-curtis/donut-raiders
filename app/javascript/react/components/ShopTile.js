import React from 'react'
import { Link } from 'react-router'

const ShopTile = (props) => {
  return(
    <div>
      <h1><Link to={`/shops/${props.id}`}>{props.name}</Link></h1>
      <h4>{props.city}</h4>
    </div>
  )
}


export default ShopTile
