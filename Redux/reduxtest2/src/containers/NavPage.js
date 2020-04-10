import React, {useState, useEffect} from 'react'
import Nav from '../components/Nav'
import {connect} from 'react-redux'

function NavPage(props) {
    const [logger_name, setLogger_name] = useState(null)
    const [session, setSession] = useState(null)
    const [isLogged, setIsLogged] = useState(null)
/**         connect는 react-redux의 API 입니다. 이 함수는 컴포넌트를 store에 연결해 줍니다.
         connect 함수는 특정 컴포넌트 클래스의 props를 store에 연결시켜주는 함수를 리턴합니다. 
         리턴된 함수에 컴포넌트를 인수로 넣어주면 기존 컴포넌트가 수정되는 것이 아니라 새로운 컴포는터를 리턴합니다.  */
    useEffect(()=>{
        if(!logger_name || !isLogged || !session){
            setLogger_name(props.id)
            setSession(props.session)
            setIsLogged(props.isLogged)
        }else if(logger_name !== props.logger_name || session !== props.session || isLogged !== props.isLogged){
            setLogger_name(props.id)
            setSession(props.session)
            setIsLogged(props.isLogged)
        }
    })

    return (
        <div>
            {isLogged && <Nav logger_name={props.id} session={props.session} isLogged={props.isLogged}/>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        id: state.logger.id,
        isLogged: String(state.logger.isLogged),
        session: state.logger.session
    }
}

NavPage = connect(mapStateToProps)(NavPage)

export default NavPage;
