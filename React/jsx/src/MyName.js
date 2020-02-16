import React, {Component} from 'react';
// MyName 함수를 MyNameProps에서 import해서 가져온다
import MyName from './MyNameProps'

class App extends Component{
  render(){
    return(
    <div>
      <MyName name = "infrearn"/>
      <MyName/>
    </div>
    )
  }
}

export default App;