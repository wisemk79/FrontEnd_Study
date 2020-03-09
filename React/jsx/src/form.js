import React, {useState} from 'react'
import axios from 'axios'

export default function() {
    const [email, setEmail] = useState("")
    const [output, setOutput] = useState("")
    const sendAxios = (url,data) => {
        axios.post(url, data)
        .then(response => {
            const result = response.data;
            console.log(`POST: email is added `, result.name);
            setOutput(result.name)
        })
        .catch(error => console.error(error));
    };

    const inputdata = {email}
   
    return (
        <>
        <form>
        email: <input type="text"  onChange={(e) => setEmail(e.target.value)} value={email}/><br/>
        {/* onClick에 함수를 넣어줘야하는디 arrow로 처음시작한다음 뒤에 값을 넣어준다 */}
    <button onClick={(e)=>{
         e.preventDefault();
        sendAxios('http://localhost:3000/axios_send_email', inputdata)
    }}>axiossend</button>
</form>
{output ? output : 'There is no Data'}
        </>
    )
}

