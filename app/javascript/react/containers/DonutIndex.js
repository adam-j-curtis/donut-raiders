import React, { Component } from 'react'
import DonutTile from '../components/DonutTile'

class DonutIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      donuts: []
    }
  }

  componentDidMount(){
    fetch(`/api/v1/donuts`)
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
      this.setState({ donuts: body.donuts})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {

    let mappedDonuts = this.state.donuts.map(donut => {
      return(
        <DonutTile
          key = {donut.id}
          id = {donut.id}
          name = {donut.name}
          shopName = {donut.shop.name}
        />
      )
    })
    return(
      <div>
        {mappedDonuts}
      </div>
    )
  }
}


export default DonutIndex
