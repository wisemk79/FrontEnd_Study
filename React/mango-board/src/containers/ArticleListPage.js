import {ArticleList} from '../components'
import axios from 'axios'
import host from '../local'
import React, {useState, useEffect} from 'react'
import queryString from 'query-string'

export default function AriticleListPage({location, history}){
    const query = queryString.parse(location.search);
    console.log(query)
    console.log(history)
    const [items, setItems] = useState(null)
    const [count, setCount] = useState(0)
    const [size, setSize] = useState(10)
    const [page, setPage] = useState("1")

    const getArticleListAxios = (url) => {
        console.log("호출")
         axios.get(url)
        .then((res) => {
            setCount(res.data.count.count)
            setItems(res.data.items)
        });

    };

    //componentDidMount, componentDidUpdate랑 같은역할
    useEffect(()=> {
        if(query.size === undefined){
        setSize(query.size)
        history.push(`/articles?size=${size}`)
        getArticleListAxios(host + "/articles" + location.search)}
        
        if(size !== query.size){
        setSize(query.size)
        getArticleListAxios(host + "/articles" + location.search)}

        if(page !== query.page){
            setPage(query.page)
        }
    })
console.log(items);

    return(
        items ? 
        <ArticleList 
            items={items} 
            history={history} 
            count={count} 
            size={size} 
            page={page} 
            location={location.search} 
            getArticle={getArticleListAxios}    
        />: "loading"
    )
}



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

// import {connect} from 'react-redux'//react-redux에 연결한다.

// const mapStateToProps = (state) => {
//     return {
//         items: state.articles
//     }
// }
// export default connect(mapStateToProps)(ArticleList)