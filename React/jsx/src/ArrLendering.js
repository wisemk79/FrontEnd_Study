import React, { Component } from 'react'

export default class ArrLendering extends Component {
    render() {
        //
        const numbers = [1,2,3,4,5];
        const squard = numbers.map(n => n * n);//기존에 제곱하려면 함수를 쓰지만 이렇게 map을 쓰면 손쉽게 만들수 있다. 
        
        const arrayl = [1,2,3,4,5];
        console.log(arrayl.slice(0,3));
        console.log(arrayl.slice(0,1));
        console.log(arrayl.slice(1,3));//배열의 1번째 자리부터 3미만의 자리수까지만 출력
        console.log(arrayl.slice(3,5));//배열의 3번째자리부터 5까지인데 5는 값이 없지만 일단 5미만까진 출력이되서 4,5가 출력됨
        console.log(arrayl.slice(0,2).concat(arrayl.slice(3,5)));
        console.log([arrayl.slice(0,2), 10, arrayl.slice(4,5)])//배열사이에 숫자 10을 넣을떄
        console.log(arrayl.filter(n => n > 3))
        console.log(arrayl.filter(n => n !== 3))
        console.log(arrayl.filter(n => n > 3))//filter함수는 silce와 다르게 불변성을 유지하기때문에 배열이 그대로 유지된다. 
        console.log(arrayl.map( n => {
            if(n === 3){//배열내의 값이 3인경우 9로 바꿔준다.
                return 9;
            }else{
                return n; //아니면 그대로 출력
            }
        }))



        return (
            <div>
                {squard}
                {arrayl}

            </div>
        )
    }
}
