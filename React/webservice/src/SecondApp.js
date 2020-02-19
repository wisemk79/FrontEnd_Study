import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

export default class App extends Component {
 
  //데이터없이 컴포넌트가 로딩을 하고, 데이터를 위해 API를 불러서 API가 데이터를 주면 컴포넌트가 state를 업데이트하게된다.
  //API콜을 타임아웃 기능으로 유사하게 구현해보자 

  //movies가 state에 없을 때마다 loading을 띄우거나 영화리스트를 보이도록 해보자.

  state = {
    
  }


  componentWillMount(){
    setTimeout(()=> {
      this.setState({
        greeting : "Hello again!"
      })

    }, 2000)
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        //5초뒤에 state에 아래 movie list를 추가해줘서 출력하도록 설정해주었다. 
        //그러나 state에 movies가 없기 때문에 render()과정에서 map(맵핑)해줄수 없을 것이고 에러가 출력될 것이다.(따라서 loading state 가 필요하다.)
        movies : [
          {
            title : "Matrix",
            poster : "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
          },
          {
            title : "Full Metal Jacket",
            poster : "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg",
          },
          {
            title : "Oldboy",
            poster : "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Oldboy_2013_film_poster.jpg/220px-Oldboy_2013_film_poster.jpg",
          },
          {
            title : "Stat Wars",
            poster : "https://www.boxofficepro.com/wp-content/uploads/2019/12/sw-riseofskywalker-onesheet-775x970-479x600.png",
          },
          {
            title : "TransFormer",
            poster : "https://images-na.ssl-images-amazon.com/images/I/71EsANpfHVL._AC_SY679_.jpg"
          }
        ]
      })
    },5000) 
  }


  _renderMovies = () => {//movies라는 variable에 데이터를 저장한 것이다. 
                         //_언더라인을 쓰는 이유는 리액트자체에 기능이 많기 때문에 내가 만들 function임을 표시하기위함이다.
    const movies = this.state.movies.map((props, index) => {
      return <Movie title = {props.title} poster = {props.poster} key = {index}/>
    })//이것이 의미하는 것은 const movies = [<Movie props>,<Movie props>,...]<-맵핑해서 이렇게 태그들을 배열을 만들어 나열하는 것이다. 
    return movies
  }

  render(){
    return (
      <div className="App">
          {/* 아래의 내용이 바로 Loading state인것이다.
          this.state.movies에 값이 있으면 this._renderMovies를 호출하고 아니라면 Loading 텍스트를 출력한다. */}
          {this.state.movies ? this._renderMovies() : 'Loading' }

          {/* {this.state.movies.map((props, index) => {
            return <Movie title = {props.title} poster = {props.poster} key = {index}/>
          })} */}
      </div>
  )
      }
}


