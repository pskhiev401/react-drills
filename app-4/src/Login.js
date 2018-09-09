import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
        }
    }

handleClick () {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
}

  render() {
    return (
      <div>
        <input onChange = {(event) => this.setState({username: event.target.value})} placeholder='Username'/>
        <input onChange = {(event) => this.setState({password: event.target.value})} placeholder='Password'/>
        <button onClick= {() => this.handleClick(this.state.username)} className="loginButton" >Login</button>
      </div>
    );
  }
}

export default App;

// onChange was shortened to change setState instead of refering to the function then i 