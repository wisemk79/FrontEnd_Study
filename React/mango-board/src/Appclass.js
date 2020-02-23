import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WriteForm from './WriteForm'
import ArticleList from './ArticleList'

class App extends Component {
  state = {
    //글목록
    articles: []
  }
  // //아이템 리스트 만들어줄때 
  // const items =[
  //   { title: "hello1", contents: "contents1"},
  //   { title: "hello2", contents: "contents2"},
  //   { title: "hello3", contents: "contents3"},
  // ]
  render(){
    const handleSubmit = (values) => {
      this.setState({articles: this.state.articles.concat(values)})
      // const makeNewArticles = () => { return {articles: this.state.articles.concat(values)}; }
      // this.setState(makeNewArticles)
      //
      // const makeNewArticles = (prevState) => {
      //   const prevArticles = prevState.articles
      //   const newArticles = prevArticles.concat(values)
      //   return {articles: newArticles}
    // }
    //   this.setState(makeNewArticles)
    }

  return (
      <>
        <WriteForm onSubmit={handleSubmit}/>
        <ArticleList items={this.state.articles}/>
      </>
    );
  }   
}

export default App;
