import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from 'react-bootstrap/Alert'
import './WriteForm.css'

export default function WriteForm(props) {
  console.log(props)
  //useState 스테이트를 만드는 것  현재 상태 값, 그 상태값 변경할수있는 함수를준다.
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [show, setShow] = useState(false);

  //title state의 값을 변경해주는 함수이다.
  const handleTitleChange = event => {
    // console.log(event.target.value) <--target(onChange이벤트에 등록한 엘레먼트)의 value
    setTitle(event.target.value);
  };

  //input value를 가져와 contents state의 값을 변경해주는 함수이다.
  const handleContentsChange = event => {
    setContents(event.target.value);
  };

  // title과 contents값이 없다면, show의 state를 true로 set하고, 5초 뒤에 false로 set한다.
  const handleAlertTypeChange = () => {
    if(!title || !contents){
      setShow(true)
      setTimeout(() => setShow(false),5000)
    }
  }

  
  // title과 contents값이 있다면, props로 onSubmit({title,contents})으로 넘겨준다
  const handleSubmit = event => {
    //preventDefault event의 기본동작을 막아줌 => submit 새로고침막아줌
    event.preventDefault();
    if(!title || !contents)
      {}      
    else
      props.onSubmit({ title, contents });
      //key의 이름과 value 변수 이름이 같은 경우 title : title인 경우 title 하나만쓰고 title : title1인 경우는 이대로씀.
  };

  //show가 true이면 Alert을 랜더링하고, false라면 랜더링하지 않는다. 
  //경고창이 노출됬을때 x버튼을 클릭하면 setShow로 show state를 false로 변환해 없어진다.
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
          <Button type="submit" variant="primary" onClick={handleAlertTypeChange}>
            글 작성
          </Button>
        </Form>
      </Card.Body>
    </Card>
    </>
  );
}

