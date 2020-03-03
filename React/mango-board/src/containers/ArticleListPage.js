import {ArticleList} from '../components'
// import {connect} from 'react-redux'//react-redux에 연결한다.

// const mapStateToProps = (state) => {
//     return {
//         items: state.articles
//     }
// }
// export default connect(mapStateToProps)(ArticleList)

import React, {useState, useEffect} from 'react'

export default function AriticleListPage(){
    const [items, setItems] = useState(null)
    //componentDidMount, componentDidUpdate랑 같은역할
    useEffect(()=> {
        if(items) return 
        const query = `select * from articles`
        window.database.execute(query, (result, error)=>{
            if(error){
                //error콘솔에 빨간글씨로 표시
                console.error("데이터 안옴", error)
            }else{
                setItems(result)
            }
            
        })
    })
    console.log(items)
    return(
        <ArticleList items={items}/>
    )
}
