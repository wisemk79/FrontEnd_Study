import React,{useState} from 'react'

export default function Login(props) {
    console.log(props)
    const handleLogin = () =>{
        props.login_evt()
    }
    const handleLogout = ()=>{
        props.logout_evt()
    }

    let axioslist = []

    if(props.datas.list){
    axioslist = props.datas.list.items
}
    const getlist = axioslist.map((list, index)=>
        <tr key={index}>
            <td>{list.id}</td>
            <td>{list.title}</td>
            <td>{list.date}</td>
            <td>{list.hit}</td>
        </tr>
    )
    
    return (
        <div>
            로그인 => {props.datas.id}<br/>
            로그인여부 => {String(props.datas.isLogged)}<br/>
            리스트 => {String(props.datas.list)}<br/>
            리스트 테이블 =>
            <br/>
            <table>
                {getlist}
            </table>
            <br/>
            <form>
                <input type="text"  onChange={props.idChange}/>
            <br/>
                <input type="password"/>
                <input type="button" onClick={handleLogin} value="로그인"/>
                <input type="button" onClick={handleLogout} value="로그아웃"/>
                <input type="button" onClick={()=>props.getAxiosAction()} value="리스트가져오기"/>
            </form>
        </div>
    )
}


