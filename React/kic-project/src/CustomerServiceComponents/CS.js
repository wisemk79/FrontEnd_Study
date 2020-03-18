import React from 'react'
import CSNavi from './CSNavi'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Notice from './Notice'
import Question from './Question'
import Template from './Template'

export default function CS() {
    return (
        <>
                <Router>
                <CSNavi/>
                    <Route path="/customer/notice" component={Notice}/>
                    <Route path="/customer/qna" component={Question}/>
                    <Route path="/customer/temp" component={Template}/>
                </Router>
        </>
    )
}
