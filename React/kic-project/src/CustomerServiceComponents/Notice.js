import React from 'react'
import {Container, Row, Col, Table} from 'react-bootstrap'
import './Notice.css'

export default function Notice() {
    return (
        <div className="notice-container">
            <Container>
                <Row>
                    <Col  className="notice-title">
                        <h4>공지사항</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Table>
                        <thead>
                            <tr>
                            <th className="notice-board">#</th>
                            <th className="notice-board">Table heading</th>
                            <th className="notice-board">Table heading</th>
                            <th className="notice-board">Table heading</th>
                            <th className="notice-board">Table heading</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            </tr>
                        </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
