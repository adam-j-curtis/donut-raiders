import React, { Component } from 'react'
import DonutTile from '../components/DonutTile'


class ShopShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      donuts: [],
      shop: [],
      reviews: []
    }
  }

  componentDidMount(){
    let shopId = this.props.params.id

    fetch(`/api/v1/shops/${shopId}`)
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
      this.setState({ donuts: body.shop.donuts, shop: body.shop, reviews: body.shop.reviews})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    console.log(this.state.params)

    let donuts = this.state.donuts.map(donut => {
      return(
        <DonutTile
          id = {donut.id}
          key = {donut.id}
          name = {donut.name}
          shopId = {this.state.shop.id}
          />
      )
    })

    return (
      <div>
        <div className="input-form">
        <h1>Store Name:{this.state.shop.name}</h1>
        </div>
        <h4>{this.state.shop.address}</h4>
        <h4>{this.state.shop.city}</h4>
        <h4>{this.state.shop.state}</h4>
        <h4>{this.state.shop.url}</h4>
        <hr/>
        <h2>Donuts:</h2>
        <hr/>
        {this.props.children}
        {donuts}
      </div>
    )
  }
}

export default ShopShow
