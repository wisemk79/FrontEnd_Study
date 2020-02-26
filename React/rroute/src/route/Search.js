import React from 'react'

//쿼리 파라메터에서 props중에 location을 사용한다. 
//location을 콘솔에 찍어본다면 주소창에 http://localhost:3000/search?keyword=나 <---라고했을때 location의 search에 "?keyword=%EB%82%98"라고 값이 들어가있다 이것을 파싱해보자
function Search({location}) {
    console.log({location})
    return (
        <div>
            {/* location 프로퍼티에있는 search값을 파싱해본다. url에서 파라메터를찾는데, location.search를 참고하고 가져온다. keyword라는 파라메터에서  */}
            {new URLSearchParams(location.search).get('keyword')}검색
        </div>
    )
}

export default Search
