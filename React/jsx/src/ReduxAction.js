import React, { Component } from "react";
import "./App.css";
import AddNumberRoot from "./Components/AddNumberRoot";
import DisplayNumberRoot from "./Components/DisplayNumberRoot";

export default class App extends Component {
    state = {number:0}
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot onClick={(props)=>this.setState({
           number: this.state.number + props
        })}/>
        <DisplayNumberRoot number={this.state.number}/>
      </div>
    );
  }
}
