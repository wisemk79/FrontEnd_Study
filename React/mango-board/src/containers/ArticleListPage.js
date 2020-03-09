import {ArticleList} from '../components'
import axios from 'axios'
import host from '../local'
import React, {useState, useEffect} from 'react'

export default function AriticleListPage(){
    const [items, setItems] = useState(null)

    const getArticleListAxios = (url) => {
        console.log("호출")
         axios.get(url)
        .then((res) => {
            console.log(res.data)
            setItems(res.data.items)
        });
    };
    
    //componentDidMount, componentDidUpdate랑 같은역할
    useEffect(()=> {
        console.log("articlelist실행");
         getArticleListAxios(host + "/articles") 
         console.log(items);
         
        
        // if(items) return 
        // const query = `select * from articles`
        // window.database.execute(query, (result, error)=>{
        //     if(error){
        //         //error콘솔에 빨간글씨로 표시
        //         console.error("데이터 안옴", error)
        //     }else{
        //         setItems(result)
        //     } 
        // })
    },[])
console.log(items);

    return(
        <ArticleList items={items}/>
    )
}





// import {connect} from 'react-redux'//react-redux에 연결한다.

// const mapStateToProps = (state) => {
//     return {
//         items: state.articles
//     }
// }
// export default connect(mapStateToProps)(ArticleList)