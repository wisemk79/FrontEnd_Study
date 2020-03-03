import React from 'react'
import Form from 'react-bootstrap/Form'

//history와 push를 통해서 redirect를 한다. history객체를 console로 찍어보면 push에 path값이 들어간다는 것을 보면 알수 있다.
function Home({history}) {
    console.log({history})
    return (
        <div className="home">
            집
            {/* history.push('path주소')<--- 버튼을 눌렀을때 해당 경로로 이동한다.  */}
            {/* <button onClick={()=>{history.push('/posts')}}>버튼</button>
            홈 */}
        </div>
    )
}

export default Home
