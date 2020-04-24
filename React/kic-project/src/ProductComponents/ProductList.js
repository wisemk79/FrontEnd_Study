import React, {useState} from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import sale60 from '../Containers/images/Product/60.png'
import sale50 from '../Containers/images/Product/50.png'
import './ProductList.css'


export default function ProductList(props) {
    const productList = props.productItems
    let saleImg = ""
    const getSaleImage = (sale) =>{
        switch(sale){
            case "0.6":
                saleImg=sale60;
                break;
            case "0.5":
                saleImg=sale50;
                break;
        }
        return saleImg
    }
    const productItemsss= productList.items
    const getProducts = productItemsss.map((product,index)=>
      <Col className="product" lg xs md={3} key={index}>
      {product.sale !== "0" ? <Image className="product-sale-img" src={getSaleImage(product.sale)} rounded />: <p className="product-sale-img"></p>}
          <Link className="product-list-img" to="/">
              <Image className="product-list-img" src={product.img} rounded />
          </Link>
          <Link className="text-link" to="/">
                <Col className="text-margin">{product.title}</Col>
          </Link>
          <Col className="text-margin"><b>{product.price}</b></Col> 
      </Col>
    )
    const categories = productList.category
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
                            <h3>{productList.category[0].name}</h3>
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
