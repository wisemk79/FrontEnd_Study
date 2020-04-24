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
import CartPage from '../Containers/CartPage'
import CS from '../CustomerServiceComponents'
import Sidebar from '../MainComponents/Sidebar'
import NewProductPage from '../Containers/NewProductPage'
import Test from '../Test'

export default function() {
    return (
        <>
            <Router>
                <Header/>
                <Navi/>
                {/* <Sidebar/> */}
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/join" component={JoinPage}/>
                    <Route path="/category" component={ProductListPage}/>
                    <Route path="/newproduct" component={NewProductPage}/>
                    <Route path="/event" component={EventListPage}/>
                    <Route path="/cart" component={CartPage}/>
                    <Route path="/customer" component={CS}/>
                    <Route path="/test" component={Test}/>
                    <Route component={MainPage}/>
                </Switch>
                <Footer/>
            </Router>
        </>
    )
}
