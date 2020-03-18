import React from 'react'
import CSNavi from './CSNavi'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NoticePage from '../Containers/NoticePage'
import Question from './Question'
import Template from './Template'

export default function() {
    return (
        <>
                <Router>
                    <CSNavi/>
                        <Switch>
                            <Route path="/customer/notice" component={NoticePage}/>
                            <Route path="/customer/qna" component={Question}/>
                            <Route path="/customer/temp" component={Template}/>
                            <Route component={NoticePage}/>
                        </Switch>
                </Router>
        </>
    )
}
