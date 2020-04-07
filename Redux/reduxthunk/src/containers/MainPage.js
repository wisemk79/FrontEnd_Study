import React, {useState} from 'react'
import Main from '../components/Main'

export default function MainPage() {
    const [logger_name, setLogger_name] = useState("없음")
    
    
    return (
        <>
            <Main logger_name={logger_name}/>
        </>
    )
}
