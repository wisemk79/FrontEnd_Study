import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './EventList.css'

export default function EventList(props) {

    const eventlist = props.eventItems
    const getEventList = eventlist.map((event, index)=>
        <Link className="event-list-img" to="/" key={index}>
              <Image className="event-list-img" src={event.img} rounded/>
        </Link>
    )

    return (
        <>
            <div className="event-list-container">
                <Container >
                    <div className="event-list-body">
                        <Col>
                            {getEventList}
                        </Col>
                    </div>
                </Container>
            </div>
        </>
    )
}
