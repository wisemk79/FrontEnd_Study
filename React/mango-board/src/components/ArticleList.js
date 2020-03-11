import React,{useState, useCallback} from "react";
// import Article from "./Article";
import { Button, ListGroup, Pagination } from "react-bootstrap";
import {Link} from 'react-router-dom'
import './ArticleList.css'
import host from '../local'

export default function ArticleList(props) {
  console.log(props)
  const [pageNum, setPageNum] = useState(1);
  //items에 아무것도 없으면 ||로 빈배열 넣어준다
  const items = props.items || [];
  const itemList = items.map((item, index) =>//items를 mapping하여 새로운 배열로 만들어준다. mapping의 경우 key값을 줘야한다.
    // <Article title = {item.title} contents = {item.contents}/>
        // <Article {...item} key = {index}/>   
    <Link to={`/articles/${item.id}&page=${props.size}`} key={index}>
      <ListGroup.Item > {item.title}</ListGroup.Item>
    </Link>
  );
  
      const pageItems = []
      let active = pageNum;
      for (let number = 1; number <= Math.ceil(props.count/props.size); number++) {
        pageItems.push(
          <Pagination.Item key={number} active={number === active} >
            <Link className="pageNationStL" onClick={()=>{
            // props.history.push(`/articles?page=${number}`)
            setPageNum(number)
            props.getArticle(host + "/articles" + `?size=${props.size}&page=${number}`)
            }} to={`/articles?size=${props.size}&page=${number}`}>
            {number}
            </Link>
          </Pagination.Item>,
        );
      }
    
    const paginationBasic = (
      <ListGroup id="pagenationGroup" className="listGroup">
        <Pagination>{pageItems}</Pagination>
      </ListGroup>
    );



      
  return (
    <>
    <ListGroup className="listGroup"> 
    {itemList}
    </ListGroup>
    {paginationBasic}
    <ListGroup className="listGroup">
    <Link className="list" to="/write" >
    <Button className="write-button" variant="success" >글쓰기</Button>
    </Link>
    </ListGroup>
    </>
  );
}

// {/* <Article {...item} key = {index}/>

// <>
// <Card>
//   {/* itemList 배열 만큼 랜더링해준다. */}
//   {itemList}
// </Card>
// <Card>
// <Link to="/write">
// <Button id="write-button" variant="success" >글쓰기</Button>
// </Link>
// </Card>
// </> */}