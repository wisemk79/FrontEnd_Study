import React,{useState} from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import './FindIdInfo.css'

export default function FindIdInfo(props) {
    const [getName, setName] = useState("")
    const [getEmail, setEmail] = useState("")
    const [show, setShow] = useState(false)

    const handleSubmit = (e) => {
        console.log("실행")
        e.preventDefault();
        if(!getName || !getEmail)
          {setShow(true)
            setTimeout(() => setShow(false),5000)}      
        else
          props.onSubmit({ getName, getEmail });
    }

    const handleAlert = () => (
        alert('아이디 또는 비밀번호를 입력하세요.')
        )

    return (
        <>
        {show && handleAlert}
        <Container className="find-id-container">
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                            <div className="find-id-title">아이디 찾기</div>
                        <br/>
                            <div className="find-id-input-box-title">이름</div>
                        <br/>
                            <Form.Control 
                                className="find-id-input-box" 
                                size="lg" 
                                type="text" 
                                placeholder="고객님의 이름을 입력해주세요."
                                onChange={(e)=>setName(e.target.value)}
                                value={getName}
                            />
                        <br />
                            <div className="find-id-input-box-title">이메일</div>
                        <br/>
                            <Form.Control 
                                className="find-id-input-box" 
                                size="lg" 
                                type="email" 
                                placeholder="가입 시 등록하신 이메일 주소를 입력해주세요."
                                onChange={(e)=>setEmail(e.target.value)}
                                value={getEmail}
                            />
                        <br />
                            <Button className="find-id-button" type="submit">찾기</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>
    )
}
