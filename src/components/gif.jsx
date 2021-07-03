/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.selectedGifId);
    }
  }

  render = () => {
    if (!this.props.id) {
      return null;
    }
    const src = `https://media2.giphy.com/media/${this.props.selectedGifId}/200.gif`;
    return (
      <img
        src={src}
        alt=""
        className="gif"
        onClick={this.handleClick}
      />
    );
  }
}

export default Gif;
