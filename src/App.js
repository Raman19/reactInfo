import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    console.log('this value ---', this);
   this.state={name : "raman"}
  console.log('inside constructor')
this.func = this.func.bind(this);
}
func(){
  return(
   this.setState({name : 'deep kaur'})
  )
}
render() {
  return (
    <div className="App">
      <div className="App-header">
          <h1>This is react-component</h1>
            {this.state.name}
            <button  onClick={this.func}>click me</button>
      </div>
    </div>
  );
}
  
}

export default App;
