import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css';


function Movie({title, poster}){
    return(
        <div>
            <GetMoviePoster poster = {poster}/>
            <h1>{title}</h1><br/>
        </div>
    )
}


function GetMoviePoster ({poster}){
    return(
        <img src = {poster} alt='some value' />
    )
}

Movie.PropTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

