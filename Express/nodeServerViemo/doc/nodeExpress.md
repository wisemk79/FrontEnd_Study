# Express 이론
* express와 app.js 연결
`````````````````````````````````````
var Express = require('express')
    var app = express()
    app.listen(3000, fucntion(){
	console.log("start! express server on port 3000");
})
`````````````````````````````````````
 - require를 통해서 express에서 파일에있는 어떤 함수를 불러오는 것
 - app.listen을 보면 3000포트를 기반으로 함수를 실행시켜준다는 의미
 - localhost:3000 하면 접속이되는데 이것은 http://127.0.0.1:3000/과 같은 주소라고 생각하면됨

* URL요청은 get요청
````````````````````````````````
app.get('/',function(req,res){ // path를 첫번째 인자로 넣어주고, 콜백함수에 request,response를 넣어준다
    res.send("<h1>hi friend</h1>")}) //<-응답 값을 넣어주는데, html태그를 넣어줄 수 있다.
````````````````````````````````

url주소로 요청하는 것은 get요청을한다.