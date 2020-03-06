import React, {useState} from 'react'
import axios from 'axios'

export default function() {
    const [email, setEmail] = useState("")
    
    const sendAxios = (url,data) => {
        axios.post(url, data)
        .then(response => {
            const email = response.data;
            console.log(`POST: email is added`, email);
        })
        .catch(error => console.error(error));
    };
    
    const inputdata = {email}

    return (
        <>
        <form>
        email: <input type="text"  onChange={(e) => setEmail(e.target.value)} value={email}/><br/>
        {/* onClick에 함수를 넣어줘야하는디 arrow로 처음시작한다음 뒤에 값을 넣어준다 */}
    <button onClick={()=>
        sendAxios('http://localhost:3000/ajax_send_email', inputdata)
    }>axiossend</button>
</form>
        </>
    )
}
