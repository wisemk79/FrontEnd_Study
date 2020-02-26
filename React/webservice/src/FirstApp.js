import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


// const movieTitles = [
//   "Matrix",
//   "Full Metal Jacket",
//   "Oldboy",
//   "Stat Wars"
// ]

// const movieImages = [
//   "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
//   "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg",
//   "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Oldboy_2013_film_poster.jpg/220px-Oldboy_2013_film_poster.jpg",
//   "https://www.boxofficepro.com/wp-content/uploads/2019/12/sw-riseofskywalker-onesheet-775x970-479x600.png"
// ]


//아래의 무비리스트를 state로 옮겨보자.
// const movies = [
//   {
//     title : "Matrix",
//     poster : "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
//   },
//   {
//     title : "Full Metal Jacket",
//     poster : "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg",
//   },
//   {
//     title : "Oldboy",
//     poster : "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Oldboy_2013_film_poster.jpg/220px-Oldboy_2013_film_poster.jpg",
//   },
//   {
//     title : "Stat Wars",
//     poster : "https://www.boxofficepro.com/wp-content/uploads/2019/12/sw-riseofskywalker-onesheet-775x970-479x600.png",
//   }
// ]

export default class App extends Component {
  //Component LifeCycle의 이해(컴포넌트가 존재할 때 아래의 순서대로 실행된다.)
  //Render : componentWillMount() -> render() -> componentWillMount()
  /*Update : componentWillReceiveProps()(컴포넌트가 새로운 props를 받았다는 의미) 
  -> shouldComponentUpdate()(컴포넌트는 이전 props와 새로운 props를 비교해서 두개가 다르면 true를 반환해 업데이트가 발생하게된다.)
   -> componentWillUpdate()(컴포넌트가 업데이트될 것이라는 의미) -> render() -> componentDidUpdate()(컴포넌트가 업데이트 되었다는 의미)*/
  
  state = {
    greeting : "Hello!",
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
      }
    ]
  }


  //1번째로 실행
  componentWillMount(){
    console.log('1. will mount');
    setTimeout(()=> {
      // this.state.greeting = "something"//<--이렇게 하면 변경되지 않는다.
      this.setState({
        greeting : "Hello again!"
      })// state를 변경하기 위해선 setState를 이용하여 변경시켜줘야한다.

    }, 2000)//처음 웹을 켰을 때는 Hello가 출력될것이고 2초이후 state의 greeting의 값이바뀌어 출력될 것이다. 
  }

  //3번째로실행
  componentDidMount(){
    console.log('3. did mount');
    
    //movies에 다른영화를 더 추가하고싶다면?
    setTimeout(() => {//setTimeout은 몇초이후에 지정한 function로직을 수행한다는 의미
      console.log('hello did mount')
      this.setState({
        movies : [
          ...this.state.movies,//...movies는 movies안의 값을 펼쳐서 가져온다라는 의미 <--이게 없다면 밑의요소로 전체 state를 바꿔버리기때문에 꼭 넣어줘야한다.
          {//그뒤에 다른 props를 배치해준다 만약 앞에 배치하고 싶다면 먼저 props를 적고 , 다음에 ...movies를 넣어주면된다.
          title : "TransFormer",
          poster : "https://images-na.ssl-images-amazon.com/images/I/71EsANpfHVL._AC_SY679_.jpg"
          }
        ]
      })
    },5000)
   
    
  }

  //2번째로 실행
  render(){
    console.log('2. render');
    console.log(this.state.movies);
    
  return (
    <div className="App">
    {this.state.greeting}
    {/* movie컴포넌트는 title과 poster라는 props를 데이터를 얻게된다. */}
        {/* 
        <Movie title = {movieTitles[0]} poster = {movieImages[0]}/>
        <Movie title = {movieTitles[1]} poster = {movieImages[1]}/>
        <Movie title = {movieTitles[2]} poster = {movieImages[2]}/>
        <Movie title = {movieTitles[3]} poster = {movieImages[3]}/> */}

        {/* movies.map하게되면 movies라는 배열을 맵핑해서 그 요소들을 활용해서 새로운 배열을 만든다. 
        배열하나를 맵핑해서 태그들을 얻을수 있다. 중요한것이 하나 있는데, 맵핑을 해줄때는 각각에 대한 고유한 id가 있어야한다.*/}
        {this.state.movies.map((props, index) => {//state의 프로퍼티인 movies를 가져왔다
          return <Movie title = {props.title} poster = {props.poster} key = {index}/>
        })}
    </div>
  )
      }
}


