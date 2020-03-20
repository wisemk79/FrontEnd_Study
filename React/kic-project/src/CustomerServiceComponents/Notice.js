import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Table, Pagination, ListGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Notice.css'

export default function Notice(props) {
    console.log(props.page)
    const [pageNum, setPageNum] = useState(props.page)
    

    const articles = props.test
    const getArticles = articles.map((article,index)=>
        <tr key={index}>
            <td>{article.id}</td>
            <td className="notice-board-title-contents"><Link className="notice-link" to={`/customer/board/notice?no=${article.id}&page=${pageNum}`}>{article.title}</Link></td>
            <td>{article.username}</td>
            <td>{article.date}</td>
            <td>{article.count}</td>
        </tr>
    )

    const getArticleList = ()=>{
        let first = (pageNum-1)*props.size
        let last = (props.size*pageNum)-1
        if(props.listcount<=last){
        last = props.listcount}
        console.log(first,last)
        let articles = []
        for(let i=first; i<=last; i++){
            articles.push(getArticles[i])
        }
        return articles
    }

    // 자료형 중요 pageNum은 숫자가 아닌 문자다
    let active = parseInt(pageNum);
    let items = [];
    for (let number = 1; number <= Math.ceil(props.listcount/props.size); number++) {
      items.push(
        <Link to={`/customer/notice?page=${number}`}  >
            <Pagination.Item onClick={()=>
            setPageNum(number)} key={number} active={number === active}>
            {number}
            </Pagination.Item>
            </Link> 
,
      );
    }
    
    const paginationBasic = (
        <Pagination size="sm">{items}</Pagination>
    )


    return (
        <div className="notice-container">
            <Container>
                <Row>
                    <Col className="notice-title">
                        <span className="notice-title-main">공지사항</span>
                        <span className="notice-title-side">휙의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Table className="notice-board">
                        <thead>
                            <tr>
                            <th className="notice-board-countnnum">번호</th>
                            <th className="notice-board-title">제목</th>
                            <th className="notice-board-namendate">작성자</th>
                            <th className="notice-board-namendate">작성일</th>
                            <th className="notice-board-countnnum">조회</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getArticleList()}
                        </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col className="notice-pagenation">
                        {paginationBasic}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
