import axios from 'axios';
import React, { Component } from 'react';

export class SingleBeer extends Component {
  state = {
    singleBeer: null,
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({ singleBeer: response.data, isLoading: false });
      })
      .catch((err) => {});
  }
  //inside class, so use this.props since getting info from props

  render() {
    return (
      <div>
        <h1>Single Beer</h1>
        {this.state.isLoading && <h1>...Loading</h1>}
        {!this.state.isLoading && <h1>{this.state.singleBeer.name}</h1>}
      </div>
    );
  }
}

export default SingleBeer;
