import React from "react";
// import Article from "./Article";
import { Button, ListGroup } from "react-bootstrap";
import {Link} from 'react-router-dom'
import './ArticleList.css'

export default function ArticleList(props) {
  //items에 아무것도 없으면 ||로 빈배열 넣어준다
  const items = props.items || [];
  const itemList = items.map((item, index) =>//items를 mapping하여 새로운 배열로 만들어준다. mapping의 경우 key값을 줘야한다.
    // <Article title = {item.title} contents = {item.contents}/>
        // <Article {...item} key = {index}/>   
        
    <Link to={`/articles/${item.id}`} key={index}>
      <ListGroup.Item >{item.title}</ListGroup.Item>
    </Link>
  );

  return (
    <>
    <ListGroup>
    {itemList}
    </ListGroup>
    <ListGroup >
    <Link to="/write" >
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