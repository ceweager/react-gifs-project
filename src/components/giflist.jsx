/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render() {
    return (
      <div className="gif-list">
        {this.props.gifs.map((gif) => {
          console.log(gif.id);
          console.log(this.props.selectGif);
          return (
            <Gif
              selectedGifId={gif.id}
              key={gif.id}
              selectGif={this.props.selectGif}
            />
          );
        })}
      </div>
    );
  }
}

export default GifList;
