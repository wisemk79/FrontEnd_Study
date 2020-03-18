import React, {useState} from 'react'
import {Container, Row, Col, Table, Form, Button, Image } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Cart.css'


export default function Cart(props) {
    const [count, setCount] = useState(0)
    
    const cartSamples = props.cartSamples


    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const plus = () => {
        setCount(count + 1)
    }

    const minus = () => {
        if(count>0)
        setCount(count - 1)
    }

    const getList = cartSamples.map((cartSamples,index)=>{
        return(
        <tr>
        <td>
            <Form.Group className="cart-in-checkbox" controlId="formBasicCheckbox">
                <Form.Check className="cart-in-checkbox" type="checkbox"/>
            </Form.Group>
        </td>
        <td>
            <Link to="/">
                <Image className="cart-img" src={cartSamples.img} rounded />
            </Link>
        </td>
        <td><span className="cart-detail">{cartSamples.name}</span></td>
        <td>
            <Button className="plus-minus-button" onClick={minus}>-</Button>
                <Form.Control className="count-display" value={count} type="text"/>
            <Button className="plus-minus-button" onClick={plus}>+</Button>
        </td>
        <td><span className="total-price">{(parseInt(cartSamples.price)*count).toLocaleString()}원</span></td>
        </tr>)
    })

    return (
        <>
        <div className="cart-container">
        <Container>
            <Row className="title">
                <Col>
                        <h1>장바구니</h1>
                    <br/>
                        <p>주문하실 상품명 및 수량을 정확하게 확인해 주세요.</p>
                </Col>
            </Row>
            <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                <Table responsive>
                    <thead>
                        <tr>
                        <th className="table-checkbox">
                            <Form.Group className="total-checkbox" controlId="formBasicCheckbox">
                                <Form.Check className="total-checkbox" type="checkbox"/>
                            </Form.Group>
                        </th>
                            <th className="table-img"><span>전체선택</span></th>
                            <th className="table-detail"><span>상품정보</span></th>
                            <th className="table-count"><span>수량</span></th>
                            <th className="table-price"><span>상품금액</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {getList}
                    </tbody>
                </Table>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className="cart-submit" type="submit">주문하기</Button>
                </Col>
            </Row>
            </Form>
        </Container>
        </div>
        </>
    )
}
