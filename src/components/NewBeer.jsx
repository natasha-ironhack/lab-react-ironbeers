import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewBeer extends Component {
  state = {
    name: '',
    description: '',
    contributedBy: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //we are gonna send the info on the state to the POST
    //endpoint
    //the POST endpoint is the whole address.
    //how u contact the API
    //this is the endPoint that the backend will have
    //that the server they build will have
    //how to access those is with the request we send
    //to the end point?
    //this is a POST request. (that allows you to go
    //to that url.
    //they always expect the info we will send
    //how to send that? as an additional arg.
    //add an , and an obj. {} after the link here
    //react code might be in france,
    //and the API or server can be in china
    //so in react, we tryin send info that will be updated
    //in database. below is asynchronous behavior, thus
    //we use .then catch
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: this.state.name,
        description: this.state.description,
        contributed_by: this.state.contributedBy,
      })
      .then(() => {
        this.props.history.push('/beers');
        //simple way to redirect
        //for previous and current history? doesn't matter
      })
      .catch((err) => {});
  };

  render() {
    return (
      <div>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <h1>Add Beer Form</h1>
        {/*need a control form(at) */}

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
          />

          <label htmlFor="description">description</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="description"
            value={this.state.description}
          />
          <label htmlFor="contributedBy">contributedBy</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="contributedBy"
            value={this.state.contributedBy}
          />

          <button type="submit">Add New Beer</button>
        </form>
      </div>
    );
  }
}

//input oChange means when you click it, it goes to
//handleChange, it updates the state, by filling in
//the empty values in state, then displays that
//by rendering or re-rendering the new value

export default NewBeer;
