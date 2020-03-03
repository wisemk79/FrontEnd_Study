import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from 'react-bootstrap/Alert'
import './WriteForm.css'

export default function WriteForm(props) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [show, setShow] = useState(false);

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleContentsChange = event => {
    setContents(event.target.value);
  };


  const handleSubmit = event => {
    event.preventDefault();
    if(!title || !contents)
      {setShow(true)
        setTimeout(() => setShow(false),5000)}      
    else
      props.onSubmit({ title, contents });
  };

  const AlertDismissible = () => {  
    return (
      <>
      <Alert show={show} variant="danger">
      <span className="alert-text">
          제목과 내용을 입력해주세요!
        </span>
        <div className="d-flex justify-content-end">
        <Button onClick={() => setShow(false)} variant="outline-danger" className="xbutton">
            X
        </Button>
        
        </div>
      </Alert>
    </>
    )}

  return (
    <>
    <AlertDismissible/>
    <Card>
      <Card.Body>
        {/* 글작성 버튼을 작성하면, handleSubmit 함수를 호출하여 title, contents값을 부모 컴포넌트로 전달한다.*/}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="write_title">
            <Form.Label>제목</Form.Label>
            {/*onChange(input element에 값이 변경되었을때 발생되는 이벤트를 전달 받는 함수) value ={this.state.title} <--react hook을 이용하는 경우 직접 state를 접근해서 사용하지 않는다. */}
            <Form.Control
              type="text"
              onChange={handleTitleChange}
              value={title}
            />
          </Form.Group>
          
          <Form.Group controlId="write_contents">
            <Form.Label>내용</Form.Label>
            {/* onChange 이벤트가 발생하면, event.target.value(아래의 value={contents값}을 가져온다.) */}
            <Form.Control
              as="textarea"
              rows="10"
              onChange={handleContentsChange}
              value={contents}
            />
          </Form.Group>
          
          {/* 버튼을 누르면, title과 contents값이 비어있는지 확인하고, 둘다 값이 있다면 submit해준다. */}
          <Button type="submit" variant="primary">
            글 작성
          </Button>
        </Form>
      </Card.Body>
    </Card>
    </>
  );
}