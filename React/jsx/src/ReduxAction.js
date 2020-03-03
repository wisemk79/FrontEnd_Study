import React, { Component } from "react";
import "./App.css";
import AddNumberRoot from "./Components/AddNumberRoot";
import DisplayNumberRoot from "./Components/DisplayNumberRoot";
//부모컴포넌트
export default class App extends Component {
    state = {number:0}
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        {/* AddNumberRoot 컴포넌트에서 onClick으로 받은 props값(this.state.size)을 
        부모 컴포넌트 state의 props에 더해준다.*/}
        <AddNumberRoot onClick={(props)=>this.setState({
           number: this.state.number + props
        })}/>
        {/* state의 number을 DisplayNumberRoot 컴포넌트에게 props로 전달해준다. */}
        <DisplayNumberRoot number={this.state.number}/>
      </div>
    );
  }
}
