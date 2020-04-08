import React, {useState, useEffect} from 'react'
import Main from '../components/Main'
import {connect} from 'react-redux'

function MainPage(props) {
    const [logger_name, setLogger_name] = useState(null)

    useEffect(() => {
        if(!logger_name){
            setLogger_name(props.id)
        }
    })
    
    return (
        <>
            {logger_name && <Main logger_name={props.id}/>}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        id: state.logger.id
    }
}

MainPage = connect(mapStateToProps)(MainPage)

export default MainPage;

