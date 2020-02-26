import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export default function Article(props) {
  //Article은 props로 items배열을 받고, 그 배열을 아래의 props값을 넣어줘 랜더링해준다.
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            {props.title}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{props.contents}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
