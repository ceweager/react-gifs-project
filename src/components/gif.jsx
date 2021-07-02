import React, { Component } from 'react';

class Gif extends Component {
  constructor({ id }) {
    super();
    this.link = `https://media2.giphy.com/media/${id}/200.gif`;
  }

  render() {
    return (
      <img src={this.link} alt="" className="gif" />
    );
  }
}

export default Gif;
