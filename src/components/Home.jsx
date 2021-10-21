import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//do this b/c the links from react router dom has
//additional features that anchor tags don't
import beersImg from '../assets/beers.png';
import randomImg from '../assets/random-beer.png';
import newBeerImg from '../assets/new-beer.png';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/beers">
          <img src={beersImg} alt="beers" />
          <h1>Beers!</h1>
          <p>Ipsum Lorem</p>
        </Link>
        <Link to="/random-beer">
          <img src={randomImg} alt="random-beer" />
          <h1>Random Beer</h1>
          <p>Ipsum Lorem</p>
        </Link>
        <Link to="/new-beer">
          <img src={newBeerImg} alt="new-beer" />
          <h1>Add New Beer</h1>
          <p>Ipsum Lorem</p>
        </Link>
      </div>
    );
  }
}

export default Home;
