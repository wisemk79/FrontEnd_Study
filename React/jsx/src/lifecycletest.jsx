import React,{useState, useEffect} from 'react'

export default function Lifecycletest() {
    const [counter, setCounter] = useState(0)
    const [x, setx] = useState(1)
    function getdata(){
        setCounter(counter + 1);
    }
    useEffect(() => {
        if(x===1){
            setx(2)

            setCounter(counter + 1);
            setCounter(counter + 1);
            setCounter(counter + 1);
            // getdata()
            // getdata()
            // getdata()
        }
    }, [counter])


    console.log(counter)

    return (
        <div>
            ddddd
        </div>
    )
}
