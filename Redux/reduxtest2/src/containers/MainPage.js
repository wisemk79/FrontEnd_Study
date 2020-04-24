import React, {useState, useEffect} from 'react'
import Main from '../components/Main'
import {connect} from 'react-redux'

function MainPage(props,{location, history}) {
    console.log(location, history)
    const [logger_name, setLogger_name] = useState(null)
    const [isLogged, setIsLogged] = useState(null)
    const [session, setSession] = useState(null);

    useEffect(() => {
        if(!logger_name || !isLogged){
            setLogger_name(props.id)
            setIsLogged(props.isLogged)
            setSession(props.session)
        }
    })
    
    return (
        <>
            {logger_name && <Main logger_name={props.id} isLogged={props.isLogged} session={session}/>}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        id: state.logger.id,
        isLogged: String(state.logger.isLogged),
        session: state.logger.session
    }
}

MainPage = connect(mapStateToProps)(MainPage)

export default MainPage;

