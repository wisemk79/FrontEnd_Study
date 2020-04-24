import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Route from './Router/index'
import { withCookies, useCookies } from 'react-cookie'
import {setData} from './action/index'
import {connect} from 'react-redux'

function App(props) {
  console.log(props)
  const [pageLoad, setPageLoad] = useState(null)
  console.log(props.allCookies.user_isLogged,props.allCookies.user_id)
  console.log(props.data)


  useEffect(() => {
    if(!pageLoad){
      setPageLoad(1)
      // const cookieData= {id:props.allCookies.user_id, isLogged:props.allCookies.user_isLogged}
      props.getData(props.allCookies.user_id)
      console.log(props.data)
    }
  })


  
  return (
    <>
      <Route/>
    </>
  );
}

//reducer에 있는 state를 가져오는데, reducer의 logger함수에서 반환한다.
const mapStateToProps = (state) => {
  return {
      id: state.logger.id,
      isLogged: state.logger.isLogged,
      list:state.logger.list,
      session:state.logger.session,
      data:state.logger.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getData: (data)=>dispatch(setData(data)),

  }
}

App = withCookies(connect(mapStateToProps, mapDispatchToProps)(App));

export default App;
