import React, {useState, useEffect} from 'react'
import Login from '../RegisterComponents/Login'
// import host from './local'
// import axios from 'axios'

export default function LoginPage() {
    const [data, setData] = useState(null)

    // const sendArticleAxios = (url,data) => {
    //     console.log('axios실행')
    //     axios.post(url, data)
    //     .then(response => {
    //         const result = response.data;
    //         console.log(`POST: data is added `, result);
    //     })
    //     .catch(error => console.error(error));
    // };

    // useEffect(() => {
    //     if(data){
    //         sendArticleAxios(host + '/login')
    //     }
    // })

    const handleData = (data) => {
        setData(data)
        console.log(data)
    }
    return (
        <>
            <Login onSubmit={handleData}/>
        </>
    )
}
