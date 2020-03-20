import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CSNavi from './CSNavi'
import NoticePage from '../Containers/NoticePage'
import QuestionPage from '../Containers/QuestionPage'
import TemplatePage from '../Containers/TemplatePage'

export default function () {
    return (
        <>
            고객센터 라우팅
            <Router>
                <CSNavi/>
                <Switch>
                    <Route path="/customer/notice" component={NoticePage}/>
                    <Route path="/customer/qna" component={QuestionPage}/>
                    <Route path="/customer/temp" component={TemplatePage}/>
                    <Route component={NoticePage}/>
                </Switch>
            </Router>
        </>
    )
}
