import React, { Component } from 'react';

class NewBeer extends Component {
  state = {
    name: '',
    description: '',
    contributedBy: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Add Beer Form</h1>
        {/*need a control form(at) */}

        <form>
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
