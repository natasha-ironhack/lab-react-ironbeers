import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AllBeers extends Component {
  state = {
    listOfBeers: null,
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log(response.data);
        this.setState({ listOfBeers: response.data, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <h1>All Beers!</h1>

        {this.state.isLoading && <h1>...Loading</h1>}
        {!this.state.isLoading &&
          this.state.listOfBeers.map((oneBeer) => {
            return (
              <div>
                <Link to={`beers/${oneBeer._id}`}>
                  <img src={oneBeer.image_url} alt="" height="200px" />;
                  <h3>{oneBeer.name}</h3>
                </Link>
              </div>
            );
          })}
      </div>
    );
  }
}

export default AllBeers;
