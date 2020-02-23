import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WriteForm from './WriteForm'
import ArticleList from './ArticleList'

function App(){
    const [articles, setArticles] = useState({articles:[]})
    const handleSubmit = (values) => {
      setArticles({articles: articles.articles.concat(values)})
    }

  return (
      <>
        <WriteForm onSubmit={handleSubmit}/>
        <ArticleList items={articles.articles}/>
      </>
    );
  }   


export default App;
