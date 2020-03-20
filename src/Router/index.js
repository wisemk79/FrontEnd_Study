import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from '../MainComponents/Header'
import Navi from '../MainComponents/Navi'
import Footer from '../MainComponents/Footer'
import CartPage from '../Containers/CartPage'
import EventListPage from '../Containers/EventListPage'
import JoinPage from '../Containers/JoinPage'
import LoginPage from '../Containers/LoginPage'
import MainPage from '../Containers/MainPage'
import ProductListPage from '../Containers/ProductListPage'
import CS from '../CustomerServiceComponents/index'
import FindIdInfoPage from '../Containers/FindIdInfoPage'
import FindPwInfoPage from '../Containers/FindPwInfoPage'


export default function() {
    return (
        <>
            <Router>
                <Header/>
                <Navi/>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/cart" component={CartPage}/>
                        <Route path="/event" component={EventListPage}/>
                        <Route path="/join" component={JoinPage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/shop" component={ProductListPage}/>
                        <Route path="/customer" component={CS}/>
                        <Route path="/find_id" component={FindIdInfoPage}/>
                        <Route path="/find_pw" component={FindPwInfoPage}/>
                        <Route component={MainPage}/>
                    </Switch>
                <Footer/>
            </Router>
        </>
    )
}
