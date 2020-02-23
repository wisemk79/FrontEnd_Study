import React from "react";
import Article from "./Article";
import { Card } from "react-bootstrap";

export default function ArticleList(props) {
  const items = props.items;
  const itemList = items.map((item, index) =>
    // <Article title = {item.title} contents = {item.contents}/>
    <Article {...item} key = {index}/>
  );

  return (
    <Card>
      {itemList}
    </Card>
  );
}
