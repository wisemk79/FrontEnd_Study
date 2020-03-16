import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './ProductList.css'

export default function ProductList(props) {
    const productList = props.productItems
    const getProducts = productList.map((product,index)=>
      <Col className="product" lg xs md={3} key={index}>
          <Link className="product-list-img" to="/">
              <Image className="product-list-img" src={product.img} rounded />
          </Link>
          <Link className="text-link" to="/">
                <Col className="text-margin">{product.title}</Col>
          </Link>
          <Col className="text-margin"><b>{product.price}</b></Col> 
      </Col>
    )
    return (
        <>
            <div className="product-list-body">
                <Container>
                    <Row>
                        <Col>
                            <h3>신상품</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/category">
                                <span className="category">전체보기</span>
                            </Link>
                            <Link to="/category">
                                <span>뿌리채소</span>
                            </Link>
                            <hr/>
                        </Col>                       
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                {getProducts}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
