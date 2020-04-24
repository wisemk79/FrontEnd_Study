import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainPage from '../containers/MainPage'
import LoginPage from '../containers/LoginPage'
import NavPage from '../containers/NavPage'

export default function index({location, history}) {
    console.log(location, history)
    return (
        <div>
            <Router>
            <NavPage/>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route component={MainPage}/>
                </Switch>
            </Router>
        </div>
    )
}
