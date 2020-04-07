import React, {useState} from 'react'
import Nav from '../components/Nav'

export default function NavPage() {
    const [logger_name, setLogger_name] = useState("없음")
    return (
        <div>
            <Nav logger_name={logger_name}/>
        </div>
    )
}
