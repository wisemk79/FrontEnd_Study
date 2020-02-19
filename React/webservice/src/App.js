import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

export default class App extends Component {
 
//Ajax로 https://yts.mx/api 사이트의 api(https://yts.mx/api/v2/list_movies.json)를 가져와 출력하는것을 해보자.
//https://yts.mx/api/v2/list_movies.json?sort_by=rating <--- 평점순으로 정렬하도록 /sort_by=rating추가한것<-- 여기있는 데이터들을 불러들이고 싶다.

/*
 * 1. 처음 웹이 켜지면 state에 아무것도 없기 때문에 Loading이 출력된다. 
   2. 마지막으로 did mount가 호출되면 this.getMovies가 호출된다.
   3. getmovies는 this._callApi()함수 작업 수행이 끝나면(await) this._callApi()로직에 대한 
      반환값(yts사이트의 json data 중 movies데이터)을 movies변수에 값을 넣어주고 movies변수를 반환한다.
      그 다음, movies 변수를 state에다가 set해준다.
   4. render함수에서 다시 this.state.movies(스테이트에 값이 있는지 체크하고) 데이터가 있는 걸 확인하고 
      this._renderMovies()함수를 호출한다.
   5. this.state.movies의 props를 맵핑(새로운 배열로 만듬)해주는데 
   <Movie 태그에 props의 title과 poster에 각각의 데이터를 넣어준다. props.title, props.large_cover_image 
   다만, mapping해줄때는 각각의 key값이 있어야하기때문에 key값을 매개변수로 넣어주던지, 아니면 가져온 데이터의 id값을 직접 넣어주는 것이 좋다.
   6. <Movie> 태그는 import한 Movie.js의 Movie클래스를 랜더링한것이다. 따라서 Movie클래스의 로직을 수행한다.
   7. Movies에는 props의 type이 string인지 값이 있는지 확인한후 render함수를 호출한다.
   8. <MoviePoster> 태그의 this.props.poster와 <h1></h1>의 
      this.props.title은 App.js의 Movie태그에서 전달받은 props이며,
      <MoviePoser>태그로인해 props를 전달받아 src에 해당 이미지 주소값을 전달받아 랜더링된다.
   9. <h1></h1> 태그가 수행되고 App.js의 <Movie>태그가 최종으로 랜더링된다.
 */


  state = {
  
  }

  componentDidMount(){//1.did mount하게되면 this._getMovies가 호출된다.
    this._getMovies();//이곳에는 많은 함수가 불려질 것이기 때문에 모듈화 해주는 것이 좋다.
  }


  _renderMovies = () => {
    const movies = this.state.movies.map((props) => {//(props, index) =>이렇게 인덱스를 사용하면 느리기때문에 좋지않다 따라서 지금 movie api가 같고있는 id를 가져오는 것이 좋다.key = {index} key = {props.id}
      console.log(props)
      return <Movie title = {props.title} poster = {props.large_cover_image} key = {props.id}/>
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


