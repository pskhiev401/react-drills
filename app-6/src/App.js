import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor (){
    super ();

    this.state = {
      list: [],
      userInput: '',

    };
  }

  handleUserInput = (value) => { 
    this.setState( {userInput: value});
  } 
  handleAddTask = () => {
    this.setState ( {list: [...this.state.list, this.state.userInput], userInput: '' });
  }


  render() {
    let list = this.state.list.map( (element, index) => {
      return (
        <Todo key= {index} task = {element} />
      )
    })
    
    return (
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
          <input onChange = {(event) => this.handleUserInput (event.target.value) }
            value = {this.state.userInput}
            placeholder='Enter New Task'/>

          <button onClick = {this.handleAddTask} >Add</button>
        </div>
        <br />

        {list}

      </div>
    );
  }
}

export default App;

// <input onChange = {(event} => this.setState ( {list: event.target.value})} 
// ask instructor what the render field is doing
// spread operator mdn