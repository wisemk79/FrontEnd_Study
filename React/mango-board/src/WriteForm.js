import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from 'react-bootstrap/Alert'


export default function WriteForm(props) {
  //useState 스테이트를 만드는 것  현재 상태 값, 그 상태값 변경할수있는 함수를준다.
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [alertType, setAlertType] = useState(false);
  const [show, setShow] = useState(true);

  const handleTitleChange = event => {
    // console.log(event.target.value) <--target(onChange이벤트에 등록한 엘레먼트)의 value
    setTitle(event.target.value);
  };

  const handleContentsChange = event => {
    setContents(event.target.value);
  };

  const handleAlertTypeChange = () => {
    if(!title || !contents){
      setAlertType(true)
      setShow(true)
    }else{
      setAlertType(false)
    }
    console.log(alertType)
  }

  

  const handleSubmit = event => {
    //preventDefault event의 기본동작을 막아줌 => submit 새로고침막아줌
    event.preventDefault();
    if(!title || !contents)
      {}      
    else
      props.onSubmit({ title, contents });
      //key의 이름과 value 변수 이름이 같은 경우 title : title인 경우 title 하나만쓰고 title : title1인 경우는 이대로씀.
  };

  const AlertDismissible = () => {  
    if(alertType === true)
    return (
      <>
      <Alert show={show} variant="danger">
        <h1>
          제목과 내용을 입력해주세요!
        </h1>
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-danger">
            닫기
          </Button>
        </div>
      </Alert>
    </>
    )}

  return (
    <Card>
      <Card.Body>
        {AlertDismissible()}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="write_title">
            <Form.Label>제목</Form.Label>
            {/*onChange(input element에 값이 변경되었을때 발생되는 이벤트를 전달 받는 함수) value ={this.state.title} <--직접 state를 접근해서 사용하지 않는다. */}
            <Form.Control
              type="text"
              onChange={handleTitleChange}
              value={title}
            />
          </Form.Group>
          
          <Form.Group controlId="write_contents">
            <Form.Label>내용</Form.Label>
            <Form.Control
              as="textarea"
              rows="10"
              onChange={handleContentsChange}
              value={contents}
            />
          </Form.Group>
          
          <Button type="submit" variant="primary" onClick={handleAlertTypeChange}>
            글 작성
          </Button>
        </Form>
      </Card.Body>
    </Card>
    
  );
}

