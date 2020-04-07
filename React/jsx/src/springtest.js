import React,{useState, useEffect} from 'react'
import axios from 'axios'

export default function springtest() {
    const [name, setName] = useState("")
    const [score, setScore] = useState("")
    const [userInfoList, setUserInfoList] = useState([])

    var isEmpty = function(value){ 
        if( value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) ){
             return true 
            }else{
                  return false 
                } };

    useEffect(()=>{
        if(isEmpty(userInfoList)){
            getData("http://localhost:8181/mango-spring/api/test?a=b&c=d")
            console.log(userInfoList)
        }
    })
    let userInfo =  {
                    name:name,
                    score:score
                    }
    
    const sendData = (url, data) => {
        axios.post(url, data)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }

    const getData = (url) =>{
        axios.get(url)
        .then(response => {
            console.log(response.data)
            setUserInfoList(userInfoList.concat(response.data))
        })
        .catch(error => console.log(error))
    }
    //"http://localhost:3000/score"
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(userInfo)
        sendData("http://localhost:3000/score", userInfo)
    }



    const getUserInfoList = userInfoList.map((info, index)=>
        <div key={index}>{info.name} 학생 점수는 {info.score}입니다.</div>
    )

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    학생 이름 :<input 
                                type="text" 
                                value={name} 
                                onChange={(e)=>setName(e.target.value)} 
                                placeholder="이름을 입력하세요."
                            />
                    <br/>
                    점수 :   <input 
                                type="text" 
                                value={score} 
                                onChange={(e)=>setScore(e.target.value)} 
                                placeholder="점수를 입력하세요."
                            />
                    <br/>
                    <button type="submit">전송</button>
                </form>    
                {userInfoList && getUserInfoList}
                
            </div>
        </>
    )
}
