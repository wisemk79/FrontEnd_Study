import React from 'react'
import {Redirect} from 'react-router-dom'
//로그인이 되어있지 않다고 가정
//const logged = false;

//로그인이 되어있다고 가정
const logged = true;

function MyPage() { 
    return (
        <div>
            {/* 로그인이 되어있지 않다면, 리다이렉트 한다. */}
            {
                !logged && <Redirect to="/login"/>
            }
            MyPage
        </div>
    )
}

export default MyPage
