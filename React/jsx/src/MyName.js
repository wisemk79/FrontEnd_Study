import React, {Component, Fragment} from 'react';
// MyName 함수를 MyNameProps에서 import해서 가져온다
import MyName from './MyNameProps'

class App extends Component{
  render(){
    return(
    <fragment>

      <MyName name = "infrearn"/>
      <MyName/>
    </fragment>
    )
  }
}

export default App;