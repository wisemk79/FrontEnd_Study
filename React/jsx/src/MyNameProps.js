import React from 'react';
//이 js파일은 MyName의 부모가되는것. MyNameProps가 MyName에게 Props를 상속시켜주는것
//MyName.js파일에서 import해준뒤에 <MyName name = '이름'/> 이런식으로 불러온다.

//Myname을 Arrow function을 이용하여 만든다. name이라는 객체를 가져온다.
  const MyName = ({name})=> {
    return <div>안녕하세요! 제 이름은 {name}입니다.</div>
  }
  
  MyName.defaultProps = {//defaultProps 프로퍼티를 만들어 아무것도 안적었을 때 default값으로 velopert로 정해준다.
    name : 'velopert'
  }
    export default MyName;//export해준다.
   
   
   
    //밑에는 그냥 의미없음.
    const object = {a : 1, b : 2};
    console.log(object.a)//1
    console.log(object.b)//2

    const {a , b} = object;//distructuring
    console.log(a);//1
    console.log(b);//2

    // const a = object.a; const b = object.b;
    // console.log(a);//1
    // console.log(b);//2

    function sayHello({name, age}){
      console.log(name + '의 나이는 ' + age + '입니다.')
    }

    sayHello({name : "리액트", age : '몰라'});


  

