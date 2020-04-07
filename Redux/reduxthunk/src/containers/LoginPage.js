import React, {useState} from 'react'
import Login from '../components/Login'

export default function LoginPage() {
    const [logger_name, setLogger_name] = useState("없음")
    return (
        <div>
            <Login logger_name={logger_name}/>
        </div>
    )
}
