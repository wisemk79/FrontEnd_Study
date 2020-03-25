import React, {useState, useEffect} from 'react'
import Login from '../components/Login'
import host from '../local'
import axios from 'axios'

export default function LoginPage() {
    const [data, setData] = useState(null)
    const [logged, setLogged] = useState(false)

    const sendArticleAxios = (url,data) => {
        console.log('axios실행')
        axios.post(url, data)
        .then(response => {
            const result = response.data;
            console.log(`POST: data is added `, result);
            if(result.login === true){
                setLogged(result.login)
            }
        })
        .catch(error => console.error(error));
    };

    useEffect(() => {
        if(data){
            sendArticleAxios(host + '/auth/login',data)
        }
    })

    const handleData = (data) => {
        setData(data)
        console.log(data)
    }
    return (
        <>
            <Login onSubmit={handleData} logged={logged}/>
        </>
    )
}
