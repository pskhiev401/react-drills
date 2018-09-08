import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      beers: ['Sculpin IPA', 'Pliny the Elder', 'Red Trolley', 'Mosaic IPA','Tripel Karmeliet', 'Allagash White'],
      filterString: '',
    };
  }

  handleChange = (filter) => {
    this.setState({filterString: filter})

  }

  render() {
    let beersToDisplay = this.state.beers.filter( (element) => {
      return element.includes(this.state.filterString);
    }).map( (element) => {
      return <h2>{element}</h2>
    })

    return (
      <div className="App">
        <input onChange={(event) => this.handleChange(event.target.value)} placeholder="Order A Beer" />
        {beersToDisplay}
      </div>
    );
  }
}

export default App;
