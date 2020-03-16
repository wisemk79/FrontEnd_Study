import React from 'react'
import Join from '../RegisterComponents/Join'

export default function JoinPage() {
    const handleData = (data) => {
        console.log(data)
    }
    return (
        <>
            <Join onSubmit={handleData}/>
        </>
    )
}
