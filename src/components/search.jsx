/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Search extends Component {
  handleUpdate = (event) => {
    this.props.search(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-input form-control"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default Search;
