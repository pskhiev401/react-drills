import React, { Component } from 'react';
import './App.css';

class Image extends Component {
  render() {
    return (
      <div className="App"> 
         <img src = {this.props.myPhoto} />
      </div>
    );
  }
}

export default Image;