import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WriteForm from './WriteForm'
import ArticleList from './ArticleList'

function App(){
    const [articles, setArticles] = useState([])
    const handleSubmit = (values) => {
      setArticles(articles.concat(values))
    }

  return (
      <>
        <WriteForm onSubmit={handleSubmit}/>
        <ArticleList items={articles}/>
      </>
    );
  }   


export default App;
