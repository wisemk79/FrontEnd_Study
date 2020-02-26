import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './route/Home'
import About from './route/About'
import Header from './components/Header'
import Posts from './route/Posts'
import Login from './route/Login'
import MyPage from './route/MyPage'
import Search from './route/Search'
import NoMatch from './route/NoMatch'
import './App.css';

//router로 감싸주고 route를 따로 디렉토리를 만들어 정의해준다.
function App(props) {
  return (
    <Router>
    <div>
        <Header/>
        <div>
        {/* Route를 Switch로 감싸주고 맨 밑에 에러페이지 NoMatch를 설정해준다. */}
        <Switch>
    {/* path는 특정 위치에 도달(/는 메인페이지)하면 컴포넌트를 보여줘라 exact를 지정해주면 해당 패스의 고유한 페이지가된다.*/}
        <Route exact path="/" component={Home}/>
        {/* /about에 도달하면 About컴포넌트를 보여준다. */}
        {/* url 파라메터는 id를 입력했을때 /about/id=eee처럼 들어가는걸 의미하는데 이를 지정해주는방법이 /about/:username 이런식으로 :을 넣어주면된다. */}
        {/* 파라메터를 넣었다면, About컴포넌트에서 인자로 넣어준다. */}
        <Route path="/about/:username" component={About}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/my" component={MyPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/search" component={Search}/>
        <Route component={NoMatch}/>
        </Switch>
        </div>
    </div>

    {/* component폴더를 새로만들어 header컴포넌트를 만들어보자 */}
    </Router>
  );
}

export default App;
