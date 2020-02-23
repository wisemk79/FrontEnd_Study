import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export default function Article(props) {
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
