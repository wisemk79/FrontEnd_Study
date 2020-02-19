import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

export default class App extends Component {
 
//Ajax로 https://yts.mx/api 사이트의 api(https://yts.mx/api/v2/list_movies.json)를 가져와 출력하는것을 해보자.
//https://yts.mx/api/v2/list_movies.json?sort_by=rating <--- 평점순으로 정렬하도록 /sort_by=rating추가한것<-- 여기있는 데이터들을 불러들이고 싶다.

  state = {
  
  }

  componentDidMount(){
    //Ajax
    //url을 연결한것 크롬 관리자 들어가서 network가보면 list_movies.json?sort_by=rating <--DB를 가져온것을 볼 수 있다.
    //어떠한 url도 연결할 수 있다. ex) http://google.com
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())//response라는 이름은 임의로 정해준것 json에 연결하는 것./ then fucntion은 1개의 attribute(Object)<--fetch의 결과물을 준다
    .then(json => {
      console.log(json)//콘솔에 출력해보면 movie 데이터를 몇개 가져왔는지 알 수 있다.

      // this.setState({<--근데이렇게하면 then절이 많아져서 복잡해짐
      //   movies : json.data.movies//console에 찍인 데이터 경로에 따라서 값을 넣어준다.
      // })
    }) 
    /*data: <--이런식으로
        movie_count: 15045
        limit: 20
        page_number: 1
        movies: */
    .catch(err => console.log(err));//fetch구문의 작업을 수행하면 then절의 구문을 실행하는데,근데 만약 fetch구문이 에러가있다면 catch 보여줘라
    
    //위의 첫번째 작업이 끝나야만 밑의 코드가 실행된다(synchronose)
    //첫번째 작업이 끝나지 않아도 바로 두번째 작업을 시킬 수 있는데 이게 바로 promise라고 한다. promise는 asynchronous이다.
    
  }


  _renderMovies = () => {
    const movies = this.state.movies.map((props, index) => {
      return <Movie title = {props.title} poster = {props.poster} key = {index}/>
    }) 
    return movies
  }

 
  render(){
    return (
      <div className="App">
          {this.state.movies ? this._renderMovies() : 'Loading' }
      </div>
  )
      }
}


