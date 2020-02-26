import React from "react";
import Article from "./Article";
import { Card } from "react-bootstrap";

export default function ArticleList(props) {
  console.log(props)//items:[]라는 배열을 넘겨받은걸 알 수 있다.
  const items = props.items;//[].items라는 property를 생성
  const itemList = items.map((item, index) =>//items를 mapping하여 새로운 배열로 만들어준다. mapping의 경우 key값을 줘야한다.
    // <Article title = {item.title} contents = {item.contents}/>
    <Article {...item} key = {index}/>
  );

  return (
    <Card>
      {/* itemList 배열 만큼 랜더링해준다. */}
      {itemList}
    </Card>
  );
}
