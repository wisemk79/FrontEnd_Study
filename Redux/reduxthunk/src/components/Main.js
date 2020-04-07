import React from 'react'

export default function Main(props) {
    return (
        <>
            이것은 메인 페이지<br/>
            로그인한 사람 => {props.logger_name}
        </>
    )
}
