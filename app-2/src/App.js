import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      beers: ['Sculpin IPA', 'Pliny the Elder', 'Red Trolley', 'Mosaic IPA'],
    }
  }

  render() {
    let displayedList = this.state.beers.map( element => {
      return <h2>{element}</h2>
    });

    return (
      <div className="App">
        {displayedList}
      </div>
    );
  }
}

export default App;
