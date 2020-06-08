import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import CalculateConatiner from './Containers/CalculateContainer'
import ScoreContainer from './Containers/ScoreContainer'

class App extends Component {
  state={
    id:0,
    content:"none",
    name:"hong"
  }
  componentDidMount(){
    this.setState({id:3})
  }

  render() {
    
    console.log(this.state.id, this.props)
    return (
      <div>
        <ScoreContainer/>
        <CalculateConatiner/>
      </div>
    )
  }
}



export default withRouter(App)