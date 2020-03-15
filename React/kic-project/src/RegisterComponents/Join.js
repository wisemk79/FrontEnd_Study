import React, {useState} from 'react'
import {Container, Row, Col, Form, Button, Modal} from 'react-bootstrap'
import DaumPostcode from 'react-daum-postcode'
import './Join.css'

export default function Join() {
    const [show, setShow] = useState(false);
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const handleAddress = () =>(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
                <Modal.Body>
                        <DaumPostcode
                            onComplete={handleComplete}
                        />
                </Modal.Body>
        </Modal>)

        //다음 주소 검색 
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        setAddress1(fullAddress)

        if(setAddress1){
            handleClose()
        }
        
      }
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    return (
        <>
        <div className="join-container">
            <Container>
                <Row>
                    <Col>
                        <h3>회원가입</h3>
                    </Col>
                </Row>
                <div className="join-body">
                    <Col>
                        <Form>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                아이디*
                            </Form.Label>
                            <Col sm={6}>
                            <Form.Control className="input-box" type="text" placeholder="6자 이상의 영문 또는 영문과 숫자를 조합"/>
                            </Col>
                            <Col>
                                <Button className="button-style">아이디 중복확인</Button>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            비밀번호*
                            </Form.Label>
                            <Col sm={6}>
                            <Form.Control className="input-box" type="password" placeholder="비밀번호를 입력해주세요."/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            비밀번호확인*
                            </Form.Label>
                            <Col sm={6}>
                            <Form.Control className="input-box" type="password" placeholder="비밀번호를 한번 더 입력해주세요."/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            이름*
                            </Form.Label>
                            <Col sm={6}>
                            <Form.Control className="input-box" type="text" placeholder="고객님의 이름을 입력해주세요."/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            이메일*
                            </Form.Label>
                            <Col sm={6}>
                            <Form.Control className="input-box" type="text" placeholder="예: hwig@hwigcorp.com"/>
                            </Col>
                            <Col>
                                <Button className="button-style">이메일 중복확인</Button>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            휴대폰*
                            </Form.Label>
                            <Col sm={6}>
                            <Form.Control className="input-box" type="text" placeholder="숫자만 입력해주세요."/>
                            </Col>
                        </Form.Group>
                        {handleAddress()}
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            배송주소*
                            </Form.Label>
                            <Button className="button-style" variant="primary" onClick={handleShow}>
                            주소 검색 
                            </Button>
                        </Form.Group>

                        {address1 &&
                            <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            </Form.Label>
                            <Col sm={6}>
                            <Form.Control className="input-box" type="text" value={address1} readOnly/>
                            <Form.Control className="input-box" type="text" value={address2} onChange={e=>setAddress2(e.target.value)} placeholder="나머지 주소를 작성해주세요."/>
                            </Col>
                        </Form.Group>}
                        </Form>
                    </Col>
                </div>
                <div className="join-body2">
                    dd
                </div>
            </Container>

        </div>

                                

        </>
    )
}
