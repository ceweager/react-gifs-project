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
          id: "covid-corona-vaccine-bYdeAudjggLszkyQhq"
        },
        {
          id: "covid-corona-vaccine-6lczcXhRf5UrcOnVL0"
        }
      ],
      selectedGif: ""
    };
  }

  search = (query) => {
    giphy('1KMPHCBIOe3gOjJwCJQX49sRc6cM0oIM').search(`${query}`, (err, res) => {
      this.setState({ gifs: res.data });
    });
  }

  selectGif = (id) => {
    this.setState({ selectedGif: id });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Search />
          <div>
            <Gif gif={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList
            gifs={this.state.gifs}
            search={this.search}
            selectGif={this.selectGif}
          />
        </div>
      </div>
    );
  }
}

export default App;
