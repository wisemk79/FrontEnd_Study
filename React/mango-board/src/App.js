import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WriteForm from './WriteForm'
import ArticleList from './ArticleList'

function App(){
  //1.useState를 이용 articles는 게시글을 넣어줄 것이므로 articles에 빈 배열의 state를 담아놓고 setArticles라는 함수를통해 articles의 state값을 변경해 줄 수 있다.
  /*2.handleSubmit 함수에서는 values를 받아 articles를 set해주는데, articles 배열에 concat을 해주는 이유는
  Reactjs 컴포넌트에서는 state 또는 상위 컴포넌트에서 전달받은 props의 값이 변경될 때 리렌더링을 하게된다.
  하지만, 내부의 값이 변경되었을지 몰라도, 레퍼런스가 가리키는 곳은 동일하기 때문에, 똑같은 값으로 인식하게됨. 
  그런 이유로 리 렌더링을 하지 않게되는 현상이 발생해서, 우리는 기존 값을 복사하여 새로운 객체나 배열로 만들어주어야 한다. 
  그래야 래퍼런스 주소가 바뀐 것을 인지하고 리 렌더링을 하게 된다.
  
  여기서 state를 변경할 때 push를 사용하면 안되는 이유는 push는 새로운 배열로 만든 것이 아니고, 기존 배열에 값을 넣어주는 것이기 때문에
  주소값이 바뀌지 않는다. 그래서 react컴포넌트는 state값이 변경된것으로 인식하지 않게되는것이다.
  반면, concat은 기존의 배열과 다른 배열을 합치고, 새로운 배열을 반환하기 때문에 새로운 주소값을 갖게된다.
  
  결론적으로, 기존 state의 주소 값과 변경된 state의 주소값이 달라져 리랜더링되는 것이다.

  */
    const [articles, setArticles] = useState([])
    const handleSubmit = (values) => {
      setArticles(articles.concat(values))
    }

  return (
      <>
        {/* WhiteForm컴포넌트에 onSubmit으로 handleSubmit을 props를 넘겨준다. */}
        <WriteForm onSubmit={handleSubmit}/>
        {/* ArticleList에 items로 articles배열을 props로 넘겨준다. */}
        <ArticleList items={articles}/>
      </>
    );
  }   


export default App;
