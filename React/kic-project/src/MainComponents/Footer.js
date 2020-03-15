import React from 'react'
import './Footer.css'
import {Container,Row,Col,Button} from 'react-bootstrap'

export default function Footer() {
    return (
    <>  
        <div>
            <Container className="footer-body">
                    <Row >
                        <Col md={3}>
                            <h5>고객행복센터</h5>
                            <h4>1644-1107</h4>
                            <Button className="footer-button" variant="outline-secondary" >1:1 문의</Button>
                        </Col>
                        <Col md={3}>
                            <p>365 고객센터</p>
                            <p className="footer-notice2">오전 7시 ~ 오후 7시</p>
                            <p>24시간 접수 가능</p>
                            <p className="footer-notice2">고객센터 운영시간에 순차적으로 답변해드리겠습니다.</p>
                        </Col>
                        <Col>
                            법인명(상호): 주식회사 휙 | 사업자 등록번호: 261-81-23456<br/>
                            통신판매업: 제 2020-서울강남-03245호 | 개인정보보호책임자:이원섭<br/>
                            주소: 서울시 도산대로 15길 20, 우리빌딩 B1 ~ 4F | 대표이사: 이원섭<br/>
                            입점문의: 입점문의하기 | 제휴문의: business@hwigcorp.com<br/>
                            채용문의: recruit@hwigcorp.com<br/>
                            팩스: 070-2333-3242 | 이메일: help@hwigcorp.com<br/>
                            <br/>
                            HWIG CORP .ALL RIGHT RESERVED
                        </Col>
                    </Row>
            </Container>
        </div>
    </>
    )
}
