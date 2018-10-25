import React, { Component } from 'react'
import ShopTile from '../components/ShopTile'

class ShopIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      shops: []
    }
  }

  componentDidMount(){
    fetch(`/api/v1/shops`)
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
      console.log(body)
      this.setState({ shops: body.shops})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let mappedShops = this.state.shops.map(shop => {
      return(
        <ShopTile
          key = {shop.id}
          id = {shop.id}
          name = {shop.name}
          address = {shop.address}
          city = {shop.city}
          state = {shop.state}
          phone = {shop.phone}
          url = {shop.url}
        />
      )
    })
    return(
      <div className="text-center medium-12 columns">
        {mappedShops}
        {this.props.children}
      </div>
    )
  }
}

export default ShopIndex
