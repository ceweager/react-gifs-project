/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render({ gifs }, { selectGif }) {
    return (
      <div className="gif-list">
        {gifs.map((gif) => {
          return (
            <Gif
              id={gif.id}
              key={gif.id}
              onClick={selectGif(gif.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default GifList;
