import React, { Component } from 'react';
import './App.css';
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Image myPhoto= {'http://www.felinefriendlycare.com/images/xcatfight2-800x500.jpg.pagespeed.ic.UxFcJ4kiJO.jpg'} />
      </div>
    );
  }
}

export default App;
