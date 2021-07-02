/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
// import ReactDOM from "react-dom";
import giphy from 'giphy-api';
import Search from './search';
import GifList from './giflist';
import Gif from './gif';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [
        {
          id: "bYdeAudjggLszkyQhq"
        },
        {
          id: "6lczcXhRf5UrcOnVL0"
        }
      ],
      selectedGifId: "6lczcXhRf5UrcOnVL0"
    };
  }

  search = (query) => {
    giphy('1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm').search({ limit: 10, q: `${query}` }, (err, res) => {
      console.log(res.data);
      this.setState({ gifs: res.data });
    });
  }

  selectGif = (id) => {
    this.setState({ selectedGifId: id });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <div className="form-search">
            <Search
              search={this.search}
            />
          </div>
          <div className="selected-gif">
            <Gif
              selectedGifId={this.state.selectedGifId}
              key={this.state.selectedGifId}
            />
          </div>
        </div>
        <div className="right-scene">
          <GifList
            gifs={this.state.gifs}
            selectGif={this.selectGif}
          />
        </div>
      </div>
    );
  }
}

export default App;
