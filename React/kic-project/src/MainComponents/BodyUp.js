import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel'
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './BodyUp.css'


export default function(props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  console.log(props)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  const slides = props.slideImg
  const getSlides = slides.map((slide, index)=>
    <Carousel.Item key={index}>
    <img
      className="d-block w-100"
      src={slide}
      alt="slides"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  )


  //이 상품 어때요?
  const contents1 = props.contents1_img
  const getContents1 = contents1.map((contents1,index)=>
    <Col lg xs md={2} key={index}>
        <Link className="contents1-img" to="/">
        <Image className="contents1-img" src={contents1.img} rounded />
        </Link>
        <Link className="text-link" to="/">
        <Col className="text-margin">{contents1.title}</Col>
        </Link>
        <Col className="text-margin"><b>{contents1.price}</b></Col> 
    </Col>
  )

  //이벤트 소식
  const contents2 = props.contents2_img
  const getContents2 = contents2.map((contents2,index)=>
    <Col lg xs md={4} key={index}>
        <Link className="contents2-img" to="/">
            <Image className="contents2-img" src={contents2.img} rounded />
        </Link>
        <Link className="text-link" to="/">
              <Col className="text-margin">{contents2.title}</Col>
        </Link>
        <Col className="text-margin"><b>{contents2.price}</b></Col> 
    </Col>
  )

  return (
    <>
    <div className="slide">
      <Carousel>
          {getSlides}
      </Carousel>
    </div>

    {/* Contents1(상품 추천 영역) */}
    <Container className="contents1">
          <Row className="contents-margin">
              <Col><h2>이 상품 어때요?</h2></Col>
          </Row>
          <Row className="contents-margin">
          {getContents1}
          </Row>  
    </Container>

    {/* Contents2(이벤트 영역) */}
    <div className="contents2">
          <Row className="contents-margin">
            <Col>
                <Link className="text-link" to="/"><h2>이벤트 소식 ></h2></Link>
            </Col>
          </Row>
          <Row className="contents-margin">
            {getContents2}
          </Row>
    </div>


    {/* Contents3(할인 상품 영역) */}
    <Container className="contents1">
        <Row className="contents-margin">
            <Col><Link className="text-link" to="/"><h2>알뜰 상품 ></h2></Link></Col>
        </Row>
        <Row className="contents-margin">
        {getContents1}
        </Row>  
   </Container>

    {/* Contents4(분류별 상품 영역) */}
    <Container className="contents1">
          <Row className="contents-margin">
          <Col><Link className="text-link" to="/"><h2>MD의 추천 ></h2></Link></Col>
          </Row>
          <Row className="contents4-button-position1">
            <Button variant="light" className="contents4-button">채소</Button>
            <Button variant="light" className="contents4-button">과일 견과 쌀</Button>
            <Button variant="light" className="contents4-button">정육 계란</Button>
            <Button variant="light" className="contents4-button">국 반찬 메인요리</Button>
            <Button variant="light" className="contents4-button">샐러드 간편식</Button>
            <Button variant="light" className="contents4-button">면 양념 오일</Button>
          </Row>
          <Row className="contents4-button-position2">
            <Button variant="light" className="contents4-button">음료 우유 떡 간식</Button>
            <Button variant="light" className="contents4-button">베이커리 치즈 델리</Button>
            <Button variant="light" className="contents4-button">건강식품</Button>
            <Button variant="light" className="contents4-button">생활용품</Button>
            <Button variant="light" className="contents4-button">가전제품</Button>
            <Button variant="light" className="contents4-button">반려동물</Button>
          </Row>
          <Row className="contents-margin">
          {getContents1}
          </Row>  
    </Container>

    <Container>
        <Link className="contents5-Link" to="/">
          <Row >
            <Col className="contents5">
                <h2>친구 초대하면 친구도 나도 5천원씩!</h2>
                <p> 무제한 적립금 혜택 받아가세요!</p>
            </Col>
          </Row>
        </Link>
    </Container>
  </>
  );
}



// <Row>
// <div className="frame2">
//   <div className="img">
//       <Link to="/">
//           <Image src={contents2.img} rounded/>
//       </Link>
//   </div>
// </div>
// </Row>