import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from '../Containers/MainPage'
import LoginPage from '../Containers/LoginPage'
import Header from '../MainComponents/Header'
import Navi from '../MainComponents/Navi'
import Footer from '../MainComponents/Footer'
import JoinPage from '../Containers/JoinPage'
import ProductListPage from '../Containers/ProductListPage'
import EventListPage from '../Containers/EventListPage'

export default function() {
    return (
        <>
            <Router>
                <Header/>
                <Navi/>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/join" component={JoinPage}/>
                    <Route path="/category" component={ProductListPage}/>
                    <Route path="/event" component={EventListPage}/>
                    <Route component={MainPage}/>
                </Switch>
                <Footer/>
            </Router>
        </>
    )
}
