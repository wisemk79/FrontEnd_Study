import React, {useState} from "react";
import './Article.css'
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import {Link, Redirect} from 'react-router-dom'

export default function Article(props) {
  //Article은 props로 items배열을 받고, 그 배열을 아래의 props값을 넣어줘 랜더링해준다.
  const [update, setUpdate] = useState(false)
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")
  const [redirect, setRedirect] = useState(false)

  const onFormSubmit = (e) => {
      e.preventDefault()
      props.onSubmit({title,contents})
      setUpdate(false)
      setRedirect(true)
  }

  const handleUpdate = () => {
        setTitle(props.title)
        setContents(props.contents)
        setUpdate(true)
  }

  return (
      <>
        <Container>
        <Form onSubmit={onFormSubmit}>
            <Row>
              <Col>
             { update ?
               <Form.Control 
               value={title} 
                onChange={(e)=>setTitle(e.target.value)}
               />
               :<Form.Control 
               className="text"
               plaintext 
               readOnly
               value={props.title || ""} 
               onChange={(e)=>setTitle(e.target.value)}
              />}
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col>
              <Form.Group controlId="write_contents">
            {update ?
              <Form.Control
              as="textarea"
              rows="15"
              value={ contents }
              onChange={(e)=>setContents(e.target.value)}
            />
              : <Form.Control
              className="text"
              as="textarea"
              rows="15"
              value={ props.contents || ""}
              onChange={(e)=>setContents(e.target.value)}
              readOnly
              plaintext
            />}
          </Form.Group>
              </Col>
              
            </Row>
            <Row>
            <Col>
            {update ? <Button className="articleList-button" variant="info" type="submit">수정완료</Button> 
            : <Link className="articleList-button" to='/articles'>
            <Button variant="secondary">글 목록</Button>
            </Link>}
            {update ? <Button variant="danger" onClick={()=>setUpdate(false)}>취소</Button> : props.handleDelete()}

            {update ? "" : <Button variant="info" onClick={handleUpdate}>글 수정</Button>}
            {redirect && <Redirect to="/articles"/>}
            </Col>
            </Row>
            </Form>
        </Container>
      </>  
  );
}


// export default function Article(props) {
//   //Article은 props로 items배열을 받고, 그 배열을 아래의 props값을 넣어줘 랜더링해준다.
//   return (
//     <Accordion>
//       <Card>
//         <Card.Header>
//           <Accordion.Toggle as={Button} variant="link" eventKey="0">
//             {props.title}
//           </Accordion.Toggle>
//         </Card.Header>
//         <Accordion.Collapse eventKey="0">
//           <Card.Body>{props.contents}</Card.Body>
//         </Accordion.Collapse>
//       </Card>
//     </Accordion>
//   );
// }
