import React from 'react'
import Join from '../components/Join'
import axios from 'axios'
import host from '../local'

export default function JoinPage() {

    const sendArticleAxios = (url,data) => {
        axios.post(url, data)
        .then(response => {
            const result = response.data;
            console.log(`POST: data is added `, result);
        })
        .catch(error => console.error(error));
    };


    const handleData = (data) => {
        sendArticleAxios(host + '/join', data)
        console.log(data)
    }
    return (
        <>
            <Join onSubmit={handleData}/>
        </>
    )
}
