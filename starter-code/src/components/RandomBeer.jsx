import React, { Component } from "react";
import axios from "axios";

export default class RandomBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((apiResponse) => {
        this.setState({
          beer: apiResponse.data,
        });
      })
      .catch((error) => {});
  }

  render() {
    if (!this.state.beer) return null;
    return (
      <div>
        <img className="beerImg" src={this.state.beer.image_url} alt="" />
        <p>{this.state.beer.name}</p>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
      </div>
    );
  }
}