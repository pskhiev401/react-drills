import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      display: '',
    }
  }

  showDisplay = (event) => {
    this.setState({display: event.target.value})
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <input onChange={(event) => this.showDisplay(event)} placeholder="Enter Text Here" />
        <p>{this.state.display}</p>
      </div>
    );
  }
}

export default App;
