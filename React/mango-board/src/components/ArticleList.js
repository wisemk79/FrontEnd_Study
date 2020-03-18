import React,{ useState } from "react";
// import Article from "./Article";
import { Button, ListGroup, Pagination, Table } from "react-bootstrap";
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
    <tr className="border-body">
      <td className="board-num">{item.id}</td>
      <td className="board"><Link to={`/articles/${item.id}`} key={index}>{item.title}</Link></td>
      <td className="board-time">{item.date}</td>
      <td className="board-num">{item.hit}</td>
    </tr>
  );
  console.log(props.count,props.size)
      const pageItems = []
      let active = pageNum;
      for (let number = 1; number <= Math.ceil(props.count/props.size); number++) {
        pageItems.push(
          <Pagination.Item key={number} active={number === active}>
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
    <div className="board-body">
    <div className="title">
      <h2>게시판</h2>
    </div>
    <Table className="board-length" responsive>
    <thead>

  </thead>
  <tbody>
    {itemList}
    </tbody>
    </Table>
    {paginationBasic}
    <ListGroup className="listGroup">
    <Link className="list" to="/write" >
    <Button className="write-button" variant="success" >글쓰기</Button>
    </Link>
    </ListGroup>
    </div>
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