import React,{useState} from 'react'

export default function Login(props) {
    const [id, setid] = useState(null)
    console.log(props.data)
    const handleLogin = () =>{
        props.login_evt()
    }
    const handleLogout = ()=>{
        props.logout_evt()
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit({id});
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
            세션 => {props.datas.session}<br/>
            리스트 => {String(props.datas.list)}<br/>
            데이터 => {props.datas.data}<br/>
            리스트 테이블 =>
            <br/>
            <table>
                <tbody>
                    {getlist}
                </tbody>
            </table>
            <br/>
            <form onSubmit={handleSubmit}>
                <input type="text" value={id} onChange={(e)=> setid(e.target.value)}/>
            <br/>
                <input type="password"/>
                <input type="button" onClick={()=>{props.postAxiosAction()}} value="로그인"/>
                <input type="button" onClick={handleLogout} value="로그아웃"/>
                <input type="button" onClick={()=>props.getAxiosAction()} value="리스트가져오기"/>
                <button>제출</button>
            </form>
        </div>
    )
}


