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
    let list = this.state.beers.map( e => {
      return <h2>{e}</h2>
    })
    return (
      <div className="App">
        {list}
      </div>
    );
  }
}

export default App;
