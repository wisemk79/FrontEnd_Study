import {Article} from '../components'
import {Modal, Button} from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import '../components/Article.css'
import axios from 'axios'
import host from '../local'

export default function AriticlePage({match}){
    const [item, setItem] = useState(null)
    const [show, setShow] = useState(false);
    const [deleteArticle, setDeleteArticle] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    //componentDidMount, componentDidUpdate랑 같은역할
    useEffect(()=> {
      if(item) return
      getArticleAxios(host + `/articles/${match.params.id}`)  
      
                        //밑에서 체크하지말고 직접 뽑아올때 해당 데이터만 추출 할 것
        // const query = `select * from articles where id=${match.params.id}`
        // window.database.execute(query, (result, error)=>{
        //     if(error || result.length !== 1){
        //         //error콘솔에 빨간글씨로 표시
        //         console.error("데이터 안옴", error)
        //     }else{
        //         //result
        //         setItem(result[0])
        //     }
        // })
    })

    const deleteArticleAxios = (url) => {
      console.log("삭제")
      axios.delete(url);
  };

    //usestate<--이용
    const handleDelete = () => {
        return(
        <>
        <Button className="articleList-button" variant="danger" onClick={handleShow}>
          글 삭제
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>정말로 삭제하시겠습니까?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              취소
            </Button>
            <Button variant="danger" onClick={()=>{
              deleteArticleAxios(host + `/articles/${match.params.id}`)
              setDeleteArticle(true)
            }}>
              삭제
            </Button>
            {deleteArticle && <Redirect to="/articles"/>}
          </Modal.Footer>
        </Modal>
      </>
        )
    }

    const updateArticleAxios = (url,data) => {
      axios.put(url, data,{})
      .then(response => {
        console.log("업데이트 들어옴");
          setItem(response.data);
          console.log(`POST: data is changed `, response.data);
      })
      .catch(error => console.error(error));
  };

    const handleUpdate = (article) => {
        console.log(article.title,article.contents)
        // const query = `update articles set title='${article.title}', contents='${article.contents}' where id=${match.params.id}`
        const updateData = {title: article.title, contents: article.contents};
        updateArticleAxios(host + `/articles/${match.params.id}`, updateData)
    }

    const getArticleAxios = (url) => {
      console.log("호출")
       axios.get(url)
      .then((res) => {
          console.log(res.data)
          setItem(res.data.item)
      }).catch(error => console.error(error));
  };
    return(
        //item을 풀어서 전달해주기 때문에 props에 데이터가 전부 들어간다.
        <Article {...item} handleDelete={handleDelete} onSubmit={handleUpdate}/>
    )
}



