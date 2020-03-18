import React from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './ProductList.css'

export default function ProductList(props) {
    const productList = props.productItems.product
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

    const categories = props.productItems.category
    const getCategories = categories.map((category, index)=>
        <Link className="category" to="/category" key={index}>
            <Button className="category-button">{category.name}</Button>
        </Link>
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
                            {getCategories}
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
