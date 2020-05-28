# Asynchronous  
개요: 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 자바스크립트의 특성  
&nbsp;  
## 비동기 처리의 사례  
1. Ajax  
Ajax는 자바스크립트의 라이브러리로, 비동기식 자바스크립트와 xml이라는 의미를 가지고 있다.  
따라서 Ajax는 비동기식으로 동작하는데 아래의 코드를 참고하면 알 수 있듯이,  
Ajax Call로 데이터를 요청하고 가져오는 동안 기다려주지 않고 바로 아래에 있는 console.log를 수행하는 것을 알 수 있다.  
이처럼 특정 로직이 끝날때까지 기다려주지 않고 나머지 코드를 먼저 실행하는 것이 비동기 처리이다.  
````
    <script>
        var tableData;
        function getData(){
            $.get('http://localhost:3000/articles', function(res){
                console.log(res)//결과값이 정상적으로 받아지고 있다.
               tableData = res;
               return tableData
           })
        }
        
        console.log(getData())//하지만 위에서 결과값이 받아지는것과는 다르게 tableData의 값은 undefined이다.
        // 왜냐하면, $.get으로 데이터를 요청하고 받아오기까지 기다려주지 않고 다음코드인 tableData의 내용을 콘솔에 찍는 것을
        // 하기 때문에 아직 데이터가 받아와지지 않은 상태여서 undefined가 콘솔에 찍히는것이다.
        // 이렇게 특정 로직의 실행이 끝날때 까지 기다려주지 않고 나머지 코드를 먼저 실행하는 것이 비동기 처리이다.
    </script>
````  
2. setTimeout()  
개요: setTimeout()은 Web API의 한 종류이다. 코드를 바로 실행하지 않고 지정한 시간만큼 기다렸다가 로직을 실행한다.  
````
    <script>
        console.log('Hello');

        setTimeout(function(){
            console.log('Bye');
        },3000);

        console.log('Hello Again');

        //결과값은 먼저 Hello가 찍히고
        //그다음 Hello Again이 찍히고
        //마지막에 Bye가 찍힌다.
    </script>
````  
위의 코드 결과와 같이 setTimeout은 비동기 방식으로 실행되기 때문에 setTimeout이 실행되는 동안  
다음 코드가 실행되는 것을 볼 수 있다.  
&nbsp;  
## 콜백 함수로 비동기 처리 방식의 문제점 해결하기  
콜백 함수를 사용하면 특정 로직이 끝났을 때 원하는 동작을 실행시킬 수 있다.  
위의 이야기를 쉽게 말하면 사람이 많은 식당에서 대기자 명단에 이름을 쓴다음에 자리가 나면 그때 연락이오는데,  
여기서 연락이오는 시점이 콜백함수가 호출되는 시점과 같은 것이다.  
````
function getData(callbackFunc) {
	$.get('https://domain.com/products/1', function(response) {
		callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
	});
}

getData(function(tableData) {
	console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
});
````  
위의 코드를 보면 콜백함수에 서버에 받은 데이터를 넘겨줘서 그것을 호출하는것을 볼 수 있다.  
&nbsp;  
## 콜백지옥  
비동기 처리 로직을 위해 콜백함수를 연속해서 사용할 때 발생하는 문제  
`````
$.get('url', function(response) {
	parseValue(response, function(id) {
		auth(id, function(result) {
			display(result, function(text) {
				console.log(text);
			});
		});
	});
});
`````  
웹 서비스를 개발하다 보면 서버에서 데이터를 받아와 화면에 표시하기까지 인코딩, 사용자 인증 등을 처리해야 하는 경우가 있다.  
만약 이 모든 과정을 비동기로 처리해야 한다고 하면 위와 같이 콜백 안에 콜백을 계속 무는 형식으로 코딩을 하게되는데,  
이러한 코드 구조는 가독성도 떨어지고 로직을 변경하기도 어려운 점이 있다. 이와 같은 코드 구조를 콜백 지옥이라고 한다.  
&nbsp;   

## Promise  
프로미스는 자바스크립트 비동기 처리에 사용되는 객체로, 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용한다.  
`````
function getData(callback) {
  // new Promise() 추가
  return new Promise(function(resolve, reject) {
    $.get('url 주소/products/1', function(response) {
      // 데이터를 받으면 resolve() 호출
      resolve(response);
    });
  });
}

// getData()의 실행이 끝나면 호출되는 then()
getData().then(function(tableData) {
  // resolve()의 결과 값이 여기로 전달됨
  console.log(tableData); // $.get()의 reponse 값이 tableData에 전달됨
});
`````  
&nbsp;  
### Promise의 3가지 상태  
프로미스에는 기본적인 개념이 있는데 바로 프로미스의 상태(States)이다.  
여기서 말하는 상태는 프로미스의 처리과정을 의미한다.  
new Promise()로 프로미스를 생성하고 종료될 때까지 3가지 상태를 갖는다.  

- Pending(대기): 비동기 처리 로직이 아직 완료되지 않은 상태  
- Fulfilled(이행): 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태  
- Rejected(실패): 비동기 처리가 실패하거나 오류가 발생한 상태  
&nbsp;  
#### Pending(대기)  
먼저, 아래와 같이 new Promise() 메서드를 호출하면 대기 상태가된다.  
````
new Promise()
````  
new Promise() 메서드를 호출할 때 콜백 함수를 선언할 수 있고, 콜백함수의 인자는 resolve와 reject이다.  
````
new Promise(function(resolve, reject) {
  // ...
});
````   
#### Fulfilled(이행)  
여기서 콜백 함수의 인자 resolve를 아래와 같이 실행하면 이행(fulfilled) 상태가 된다.  
````
new Promise(function(resolve, reject) {
  resolve();
});
````  
그리고 이행상태가 되면 .then()으로 결과 값을 받을 수 있다.  
````
function getData() {
  return new Promise(function(resolve, reject) {
    var data = 100;
    resolve(data);
  });
}

// resolve()의 결과 값 data를 resolvedData로 받음
getData().then(function(resolvedData) {
  console.log(resolvedData); // 100
});
````  
※ 프로미스의 '이행' 상태를 좀 다르게 표현해보면 '완료' 라고 생각하면된다.  
&nbsp;  
#### Rejected(실패)  
new Promise()로 프로미스 객체를 생성하면 인자로 resolve와 reject를 받는다.  
여기서 reject를 호출하면 실패 상태가된다.  
`````
new Promise(resolve,reject){
    reject();
}
`````  
여기서 실패 상태가되면 실패한 이유(실패 처리의 결과 값)를 catch()로 받을 수 있다.  
`````
function getData(){
    return new Promise(resolve,reject){
            reject(new Error("Request is failed))
        }   
}

getData().then().catch(function(err){
    console.log(err)
})

`````  
&nbsp;  
### Promise를 이용한 Ajax 비동기 요청 예제  
````
    <script>
        function getData(callback){
            return new Promise(function(resolve,reject){
                $.get('http://localhost:3000/articles',function(response){
                    if(response){
                        resolve(response)
                    }
                    reject(new Error("Request is failed"))
                })
            });
        }

        getData()
        .then(function(tableData){
            console.log(tableData)//받아온 데이터 출력
        })
        .catch(function(err){
            console.log(err)//에러출력
        })
    </script>
````  
&nbsp;  
### Promise Chaining
프로미스는 여러개의 프로미스를 연결하여 사용할 수 있는 점이 있다.  
````
new Promise(function(resolve, reject){
  setTimeout(function() {
    resolve(1);
  }, 2000);
})
.then(function(result) {
  console.log(result); // 1
  return result + 10;
})
.then(function(result) {
  console.log(result); // 11
  return result + 20;
})
.then(function(result) {
  console.log(result); // 31
});
````  
위 코드는 프로미스 객체를 하나 생성하고 setTimeout()을 이용해 2초 후에 resolve()를 호출하는 예제이다.

resolve()가 호출되면 프로미스가 대기 상태에서 이행 상태로 넘어가기 때문에 첫 번째 .then()의 로직으로 넘어간다.  
첫 번째 .then()에서는 이행된 결과 값 1을 받아서 10을 더한 후, 그다음 .then() 으로 넘겨준다.  
두 번째 .then()에서도 마찬가지로 바로 이전 프로미스의 결과 값 11을 받아서 20을 더하고 다음 .then()으로 넘겨준다.  
마지막 .then()에서 최종 결과 값 31을 출력한다.  

### 실무에서 있을 법한 프로미스 연결 사례  
실제 웹 서비스에서 있을 법한 사용자 로그인 인증 로직에 프로미스를 여러 개 연결해보자.
`````
getData(userInfo)
  .then(parseValue)
  .then(auth)
  .then(diaplay);
`````
위 코드는 페이지에 입력된 사용자 정보를 받아와 파싱, 인증 등의 작업을 거치는 코드를 나타낸다.   
여기서 userInfo는 사용자 정보가 담긴 객체를 의미하고, parseValue, auth, display는    
각각 프로미스를 반환해주는 함수라고 가정한다. 
````
var userInfo = {
  id: 'test@abc.com',
  pw: '****'
};

function parseValue() {
  return new Promise({
    // ...
  });
}
function auth() {
  return new Promise({
    // ...
  });
}
function display() {
  return new Promise({
    // ...
  });
}
````
이처럼 여러 개의 프로미스를 .then()으로 연결하여 처리할 수 있다.  
&nbsp;  
## Async & Await  
async await은 기존 콜백함수와 promise의 단점을 보완하여 만들어진 문법이다.  
&nbsp;  
### 기본문법  
`````
async function 함수명(){
    await 비동기 처리 메서드명();
}
`````  
먼저, 함수의 앞에 async라는 예약어를 붙힌다.  그러고나서 함수의 내부 로직중  
HTTP 통신을 하는 비동기 처리 코드 앞에 await을 붙힌다.  
주의할 점은 비동기 처리 메서드가 꼭 프로미스를 반환해야 await이 의도한 대로 동작한다.  
일반적으로 await의 대상이 되는 비동기 처리 코드는 Axios와 같은 프로미스를 반환하는 API호출 함수이다.  
### 