import React from 'react'
//Header.js에서 넣어준 url 파라메터를 match해준다.
function About({match}) {
    return (
        <div>
            {/* match한 것의 parameter를 가져온다. username을 */}
            {match.params.username}의 소개
        </div>
    )
}

export default About
