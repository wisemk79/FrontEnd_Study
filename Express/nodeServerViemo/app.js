var express = require('express')
var app = express()
var bodyParser = require('body-parser')//body-parser를 가져온다.

app.listen(3000, function(){
	console.log("start!!!! express server on port 3000")
})
//http://127.0.0.1:3000/

app.use(express.static('public'))//public이라는 디렉토리에 static을 걸어줘서 자유롭게 js파일을 가져올 수 있다.
app.use(bodyParser.json())//클라이언트에서 오는 통신이 json인경우  //express에 bodyparser를 쓰도록 알려줘야한다.
app.use(bodyParser.urlencoded({extended:true}))//post로 올때는 urlencoded()를 이용한다/
app.set('view engine', 'ejs')//view 엔진은 ejs로 사용하겠다고 express한테 알려주는것 <--view폴더를 만들어 ejs파일을 생성해본다.


app.get('/',function(req,res){
	//res.send("<h1>hi friend</h1>")
	res.sendFile(__dirname + "/public/main.html")//절대경로라는것을 표시해주기 위해 __dirname을 사용한다.
})

app.get('/main',function(req,res){
	res.sendFile(__dirname + "/public/main.html")
})

app.post('/email_post',(req,res)=>{//form.html에서 submit해주면 /email_post로 라우팅을 타고 콜백함수를 실행한다.
	//get방식으로 전송하는경우 데이터를 받을때 req.params('email')이런식으로 받지만 post는 body-parser를 이용한다.
	console.log(req.body.email)//{ email: 'dsfdsfds' } body로해주면 object형태로 오는 것을 알 수 있다.
	//res.send("<h1>welcome! "+ req.body.email + "</h1>" )
	res.render('email.ejs',{'email' : req.body.email})//ejs에 오른쪽 객체 데이터가 email이라는 name값을 찾아서 req값을 찾아서 치환한다음에 클라이언트에 응답을해주게 되어있다
})








//아래코드가 100번 먼저실행되고 그다음 위에 있는 콜백함수가 실행된다.
// for(let i=0; i<100; i++){
// console.log("end of server code...")
// }