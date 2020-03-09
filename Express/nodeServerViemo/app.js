import express from 'express'
import bodyParser from 'body-parser'
import sqlite3 from 'sqlite3'
import path from 'path'
import cors from 'cors'//404떳을때 설정해줄것
import process from 'process'

// var express = require('express')
const app = express()
app.use(cors())//404떳을때 설정해줄것
// var bodyParser = require('body-parser')//body-parser를 가져온다.
// var mysql = require('mysql')//import로 구축
const dirName = path.resolve("")//절대경로로 인식시키기위함
const db = new sqlite3.Database(dirName + '/jsman')//경로를 지정해주고

db.serialize(()=>{
	// db.run('CREATE TABLE user (uid integer primary key autoincrement, email varchar(20), name varchar(10), pw varchar(20))');
	
	// const query = `insert into user(email, name, pw) values('crong@gmail.com', 'crong', 'asdf')`//쿼리를 만들어서 db.run(excute와 같은 역할)에 넣어준다
	// db.run(query)
	
	// var stmt = db.prepare('INSERT INTO lorem VALUES (?)');
						
	// for (var i = 0; i < 10; i++) {
	//   stmt.run('Ipsum ' + i);//
	// }
  
	// stmt.finalize();
  
	db.each('SELECT uid, email, name, pw FROM user', function(err, row) {
	  console.log(row.uid + ': ' + row.email + ', ' + row.name + ', ' + row.pw);
	});
})




app.listen(3000, () => {
	console.log("start!!!! express server on port 3000")
})
//http://127.0.0.1:3000/

app.use(express.static('public'))//public이라는 디렉토리에 static을 걸어줘서 자유롭게 js파일을 가져올 수 있다.
/**
 * body-parser
요청의 본문을 해석해주는 미들웨어이다.
보통 폼 데이터나 AJAX요청의 데이터를 처리한다.
 */
app.use(bodyParser.json())//클라이언트에서 오는 통신이 json인경우  //express에 bodyparser를 쓰도록 알려줘야한다.
app.use(bodyParser.urlencoded({extended:true}))//post로 올때는 urlencoded()를 이용한다/
app.set('view engine', 'ejs')//view 엔진은 ejs로 사용하겠다고 express한테 알려주는것 <--view폴더를 만들어 ejs파일을 생성해본다.

app.get('/',function(req,res){
	//res.send("<h1>hi friend</h1>")
	res.sendFile(dirName + "/public/main.html")//절대경로라는것을 표시해주기 위해 __dirname을 사용한다.
})



app.post('/email_post',(req,res)=>{//form.html에서 submit해주면 /email_post로 라우팅을 타고 콜백함수를 실행한다.
	//get방식으로 전송하는경우 데이터를 받을때 req.params('email')이런식으로 받지만 post는 body-parser를 이용한다.
	console.log(req.body.email)//{ email: 'dsfdsfds' } body로해주면 object형태로 오는 것을 알 수 있다.
	//res.send("<h1>welcome! "+ req.body.email + "</h1>" )
	res.render('email.ejs',{'email' : req.body.email})//ejs에 오른쪽 객체 데이터가 email이라는 name값을 찾아서 req값을 찾아서 치환한다음에 클라이언트에 응답을해주게 되어있다
})

app.use("/static", express.static('./'));

//post로 받은것을 '/ajax_send_email' url로 라우팅해서 
app.post('/axios_send_email',(req,res)=>{
	// console.log(req.body.email);
	const email = req.body.email 
	// console.log(email)
	let responseData = {}//response data를 json으로 주기 위해 object형태로 초기화해줘야한다.
	
	//prepare statement방식
	const query = `SELECT email, name, pw FROM user where email=?`
	db.get(query, [email],(err, row)  => {
		//에러처리는 처음에 해야한다
		if(err){
			console.log('에러임')
		}

		if(row){
			responseData.result = "ok";
			responseData.name = row.name;
			console.log('들어옴')
		}else{
			responseData.result = "no";
			responseData.name = "";
			console.log('안옴');
		}
		res.json(responseData)//json으로 응답
	  });
})


process.on('exit',()=>{
	db.close()
})



//아래코드가 100번 먼저실행되고 그다음 위에 있는 콜백함수가 실행된다.
// for(let i=0; i<100; i++){
// console.log("end of server code...")
// }