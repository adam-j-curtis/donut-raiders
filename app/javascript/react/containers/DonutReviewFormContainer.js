import React, { Component } from 'react';
import DonutNameField from '../components/DonutNameFieldTile';
import DonutCategoryField from '../components/DonutCategoryFieldTile';
import DonutShopNameField from '../components/DonutShopNameFieldTile';
import DonutShopAddressField from '../components/DonutShopAddressFieldTile';
import DonutShopCityField from '../components/DonutShopCityFieldTile';
import DonutShopStateField from '../components/DonutShopStateFieldTile';
import DonutReviewTextBodyField from '../components/DonutReviewTextBodyFieldTile';
import DonutReviewRatingField from '../components/DonutReviewRatingFieldTile';
import DonutReviewPriceField from '../components/DonutReviewPriceFieldTile';
import DonutReviewPhotoField from '../components/DonutReviewPhotoFieldTile';

class DonutReviewFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      donutName: '',
      donutCategory: '',
      categories: [],
      donutShopName: '',
      donutShopAddress: '',
      donutShopCity: '',
      donutShopState: '',
      donutReviewTextBody: '',
      donutReviewRating: '',
      donutReviewPrice: '',
      donutReviewPhoto: ''
    }
    this.handleNewDonutNameField = this.handleNewDonutNameField.bind(this)
    this.handleNewDonutCategoryField = this.handleNewDonutCategoryField.bind(this)
    this.handleNewDonutShopNameField = this.handleNewDonutShopNameField.bind(this)
    this.handleNewDonutShopAddressField = this.handleNewDonutShopAddressField.bind(this)
    this.handleNewDonutShopCityField = this.handleNewDonutShopCityField.bind(this)
    this.handleNewDonutShopStateField = this.handleNewDonutShopStateField.bind(this)
    this.handleNewDonutReviewTextBodyField = this.handleNewDonutReviewTextBodyField.bind(this)
    this.handleNewDonutReviewRatingField = this.handleNewDonutReviewRatingField.bind(this)
    this.handleNewDonutReviewPriceField = this.handleNewDonutReviewPriceField.bind(this)
    this.handleNewDonutReviewPhotoField = this.handleNewDonutReviewPhotoField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.getCategories = this.getCategories.bind(this)
  }

  handleNewDonutNameField(event) {
    this.setState({ donutName: event.target.value })
  }

  handleNewDonutCategoryField(event) {
    this.setState({ donutCategory: event.target.value })
  }

  handleNewDonutShopNameField(event) {
    this.setState({ donutShopName: event.target.value})
  }

  handleNewDonutShopAddressField(event) {
    this.setState({ donutShopAddress: event.target.value})
  }

  handleNewDonutShopCityField(event) {
    this.setState({ donutShopCity: event.target.value})
  }

  handleNewDonutShopStateField(event) {
    this.setState({ donutShopState: event.target.value})
  }

  handleNewDonutReviewTextBodyField(event) {
    this.setState({ donutReviewTextBody: event.target.value})
  }

  handleNewDonutReviewRatingField(event) {
    this.setState({ donutReviewRating: event.target.value})
  }

  handleNewDonutReviewPriceField(event) {
    this.setState({ donutReviewPrice: event.target.value})
  }

  handleNewDonutReviewPhotoField(event) {
    this.setState({ donutReviewPhoto: event.target.value})
  }

  addNewDonutReview(formPayload) {
    console.log("Render from the absent addNewDonut function")
  }

  getCategories() {
    fetch('/api/v1/categories.json')
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
      let allCategories = body;
      this.setState({ categories: allCategories });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      donutName: this.state.donutName,
      donutCateogry: this.state.donutCategory,
      donutShopName: this.state.donutShopName,
      donutShopAddress: this.state.donutShopAddress,
      donutShopCity: this.state.donutShopCity,
      donutShopState: this.state.donutShopState,
      donutReviewTextBody: this.state.donutReviewTextBody,
      donutReviewRating: this.state.donutReviewRating,
      donutReviewPrice: this.state.donutReviewPrice,
      donutReviewPhoto: this.state.donutReviewPhoto
    }
    addNewDonutReview(formPayload)
  }

  handleClear(event) {
    event.preventDefault();
    this.setState({
      donutName: '',
      donutCategory: '',
      donutShopName: '',
      donutShopAddress: '',
      donutShopCity: '',
      donutShopState: '',
      donutReviewTextBody: '',
      donutReviewRating: '',
      donutReviewPrice: '',
      donutReviewPhoto: ''
    })
  }

  componentDidMount() {
    this.getCategories()
  }

  render() {
    return(
      <form className="form-label">
        <DonutNameField
          content={this.state.donutName}
          label="Donut Name"
          name="donut-name"
          handleNewDonutNameField={this.handleNewDonutNameField}
        />
        <DonutCategoryField
          content={this.state.donutCategory}
          label="Donut Category: Pick One"
          name="donut-category"
          handleNewDonutCategoryField={this.handleNewDonutCategoryField}
          allCategories={this.state.categories}
        />
        <DonutShopNameField
          content={this.state.donutShopName}
          label="Donut Shop Name"
          name="donut-shop-name"
          handleNewDonutShopNameField={this.handleNewDonutShopNameField}
        />
        <DonutShopAddressField
          content={this.state.donutShopAddress}
          label="Donut Shop Address"
          name="donut-shop-address"
          handleNewDonutShopAddressField={this.handleNewDonutShopAddressField}
        />
        <DonutShopCityField
          content={this.state.donutShopCity}
          label="Donut Shop City"
          name="donut-shop-city"
          handleNewDonutShopCityField={this.handleNewDonutShopCityField}
        />
        <DonutShopStateField
          content={this.state.donutShopState}
          label="Donut Shop State"
          name="donut-shop-state"
          handleNewDonutShopStateField={this.handleNewDonutShopStateField}
        />
        <DonutReviewTextBodyField
          content={this.state.donutReviewTextBody}
          label="Donut Review Text Body"
          name="donut-review-text-body"
          handleNewDonutReviewTextBodyField={this.handleNewDonutReviewTextBodyField}
        />
        <DonutReviewRatingField
          content={this.state.donutReviewRating}
          label="Donut Review Rating"
          name="donut-review-rating"
          handleNewDonutReviewRatingField={this.handleNewDonutReviewRatingField}
        />
        <DonutReviewPriceField
          content={this.state.donutReviewPrice}
          label="Donut Review Price"
          name="donut-review-price"
          handleNewDonutReviewPriceField={this.handleNewDonutReviewPriceField}
        />
        <DonutReviewPhotoField
          content={this.state.donutReviewPhoto}
          label="Donut Review Photo"
          name="donut-review-photo"
          handleNewDonutReviewPhotoField={this.handleNewDonutReviewPhotoField}
        />

        <div className="button-group">
          <button className="button" onClick={this.handleClear} >Clear</button>
          <input className="button" onClick={this.handleSubmit} type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default DonutReviewFormContainer;
/*
Donut Name
Donut Category (Radio Buttons)
Donut Shop Name
Donut Shop Address
Donut Shop City
Donut Shop State
Donut Review Text Body
Donut Review Raiting (Radio Buttons?)
Donut Review Price (Radio Buttons?)
Donut ReviewPhoto
*/
