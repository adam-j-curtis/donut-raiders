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
      <div className="text-center shop-show">
        <div className="input-form">
          <h1>{this.state.shop.name}</h1>
          <h3>{this.state.shop.address}</h3>
          <h3>{this.state.shop.city}</h3>
          <h3>{this.state.shop.state}</h3>
          <a id="small-link" href='http://${this.state.shop.url}'>{this.state.shop.url}</a>
          <img src={this.state.shop.photo_url}></img>
          <hr/>
        </div>
        <div className="donut-header">
          <h2>Donuts:</h2>
        </div>
        <hr/>
        {this.props.children}
        <div className="donut-list">
          {donuts}
        </div>
      </div>
    )
  }
}

export default ShopShow
