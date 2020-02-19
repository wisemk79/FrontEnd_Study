import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Movie.css';


export default class Movie extends Component {
    //propTypes의 역할은 만약 부모 컴포넌트가 보낸 props의 타입이 string인지 아닌지 체크해주는 기능을한다. 
    //isRequired를 붙히게되면 해당 prop을 보내지 않는 경우 오류가 뜨게되는것이다.
    static propTypes = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired
    }

    //render보여주는것
    render() {
    console.log(this.props);//앞의 <Movie title = {movies[0]}/>로 movies의 props를 가져온것.
        return (
            <div>
                {/* 태그에서도 props를 전달해줘야된다. */}
                <MoviePoster poster = {this.props.poster}/>
                {/* <h1>Hello this is a movie</h1> */}
                {/* 각 title의 이름과 포스터가 나오게된다. {this.props.poster,title} */}
                <h1>{this.props.title}</h1><br/>
            </div>
        )
    }
}

class MoviePoster extends Component {
    
    render() {
        return (
            <div>
                {/* img는 alt로 정의해줘야한다. 또한 src에 props를 전달해줄것 */}
                <img alt='some value' src = {this.props.poster}/>
            </div>
        )
    }
}