import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Movie.css';


export default class Movie extends Component {

    //render보여주는것
    render() {
    console.log(this.props);//앞의 <Movie title = {movies[0]}/>로 movies의 props를 가져온것.
        return (
            <div className = "Movie">
                <div className = "Movie_Columns">
                    <MoviePoster poster = {this.props.poster} alt = {this.props.title}/>
                </div>
                <div className = "Movie_Columns">
                    <h1>{this.props.title}</h1>
                    <div className = "Movie_Genres">
                        {this.props.genres.map((genre, index) => <MovieGenre genre = {genre} key = {index}/>)}
                        <p></p>
                    </div>
                    <div className = "synopsis">
                        {this.props.synopsis}
                    </div>
                </div>

            </div>
        )
    }
}

function MoviePoster({poster, alt}){
        return (
                // alt는 포스터에 커서를 놓으면 해당 포스터 타이틀이 나오도록 설정해주는것
                <img alt= {alt} src = {poster} title = {alt} className = "Movie_Poster"/>
        )
}


function MovieGenre({genre}){
    return (
        <spen className = "Movie_Genere">{genre}</spen>
    )
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired,
}


MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired,
}

MovieGenre.propTypes = {
    genre : PropTypes.string.isRequired
}
