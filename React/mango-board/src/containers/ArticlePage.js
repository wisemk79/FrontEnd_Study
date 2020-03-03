import {Article} from '../components'
import {Modal, Button} from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import '../components/Article.css'

export default function AriticlePage({match}){
    const [item, setItem] = useState(null)
    const [show, setShow] = useState(false);
    const [deleteArticle, setDeleteArticle] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //componentDidMount, componentDidUpdate랑 같은역할
    useEffect(()=> {
        if(item) return 
                        //밑에서 체크하지말고 직접 뽑아올때 해당 데이터만 추출 할 것
        const query = `select * from articles where id=${match.params.id}`
        window.database.execute(query, (result, error)=>{
            if(error || result.length !== 1){
                //error콘솔에 빨간글씨로 표시
                console.error("데이터 안옴", error)
            }else{
                //result
                setItem(result[0])
            }
        })
    })
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
              const query = `delete from articles where id=${match.params.id}`
              window.database.execute(query, (result, error)=>{
            if(error){
                //error콘솔에 빨간글씨로 표시
                console.error("데이터 안옴", error)
            }else{
              console.log("데이터 삭제 완료")
              setDeleteArticle(true)
            }
        })
            }}>
              삭제
            </Button>
            {deleteArticle && <Redirect to="/articles"/>}
          </Modal.Footer>
        </Modal>
      </>
        )
    }

    const handleUpdate = (article) => {
        console.log(article.title,article.contents)
        // update articles set title="${article.title}", contents="${article.contents}" where id=${match.params.id}
        const query = `update articles set title='${article.title}', contents='${article.contents}' where id=${match.params.id}`
        window.database.execute(query, (result, error)=>{
      if(error){
          //error콘솔에 빨간글씨로 표시
          console.error("데이터 안옴", error)
      }else{
        console.log("데이터 업데이트 완료")
      }
  })
    }

    return(
        //item을 풀어서 전달해주기 때문에 props에 데이터가 전부 들어간다.
        <Article {...item} handleDelete={handleDelete} onSubmit={handleUpdate}/>
    )
}



