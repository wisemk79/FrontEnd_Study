import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

export default class App extends Component {

  state = {
  
  }

  componentDidMount(){//1.did mount하게되면 this._getMovies가 호출된다.
    this._getMovies();//이곳에는 많은 함수가 불려질 것이기 때문에 모듈화 해주는 것이 좋다.
  }


  _renderMovies = () => {
    const movies = this.state.movies.map((props) => {//(props, index) =>이렇게 인덱스를 사용하면 느리기때문에 좋지않다 따라서 지금 movie api가 같고있는 id를 가져오는 것이 좋다.key = {index} key = {props.id}
      console.log(props)//영화 사이트의 구성요소를 console에서 볼 수 있다.
      return <Movie 
        title = {props.title_english} 
        poster = {props.medium_cover_image} 
        key = {props.id} 
        genres = {props.genres}
        synopsis = {props.synopsis}  
        />
      }) 
    return movies
  }
  //2._getMovies async function 인데, movies라는 variable을 갖고있고, 이 var은 this._callApi라는 await모드로 하는데,
  _getMovies = async () => {//async function 순서와 상관없이 실행되는 함수 
    const movies = await this._callApi();//await이란, this._callApi라는 함수의 작업 수행이 끝나면, movies라는 변수에 this._callApi함수의 반환값을 리턴한다는 의미이다.
    this.setState({
       movies//movies : movies<-랑 같은 의미이며, 이 컴포넌트의 setstate를 movies(_callApi함수의 return value가 되는 것이다.)로 한다는 의미이다.
    })
  }

  _callApi = () =>{
   return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)//<--해당 api의 json movies데이터를 가져온다. 
    .catch(err => console.log(err));    
  }

  render(){
    return (
      <div className="App">
          {this.state.movies ? this._renderMovies() : 'Loading' }
      </div>
  )
      }
}


