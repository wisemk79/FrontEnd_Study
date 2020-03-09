import React, {useState} from 'react'
import {WriteForm} from "../components"
// import {connect} from 'react-redux'
// import {postArticle} from '../actions'
import {Redirect} from 'react-router-dom'
import host from '../local'
import axios from 'axios'

export default function WriteFormPage() {
    const [redirect, setRedirect] = useState(false)
    
    const sendArticleAxios = (url,data) => {
        axios.post(url, data)
        .then(response => {
            const result = response.data;
            console.log(`POST: data is added `, result);
        })
        .catch(error => console.error(error));
    };

    const handleSubmit = (article) => {
        const inputdata = {title: article.title, contents: article.contents}
        sendArticleAxios(host + '/articles', inputdata)
        setRedirect(true)
    
        // 액션을 스토어까지 포스트함
        // props.postArticleAction({article})
        // const query =`insert into articles(title, contents) values("${article.title}","${article.contents}")`

        // //excute 쿼리 실행 하면 (result, error) => <--요것이 콜백 함순데 에러가 뜨면 에러를 출력하렴 아니면 다음작업을하라는 거
        // window.database.execute(query, (result, error) => {
        //     if (error) {
        //         console.error("cannot insert article: ", error)
        //     } else {
        //         setRedirect(true)
        //     }
        // })
    }
    return (
        redirect ? <Redirect to="/articles"/> : <WriteForm onSubmit={handleSubmit}/>
    )
}

//ditpatch는 connect에서 온다 store의 dispatch
// const mapDispatchToProps = (dispatch) => {
//     return {
//         //props안에 들어가있음?
//         postArticleAction: (params) => {
//             dispatch(postArticle(params))
//         }
//     }
// }

// export default connect(null,mapDispatchToProps)(WriteFormPage)

