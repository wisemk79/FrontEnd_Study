import express from 'express'
const app = express()

//express하위에 Router()함수가 있다
const router = express.Router();

//여기서 router는 react라우터와는 다르게 서버에 get또는 post로 오는 데이터 처리를 모듈화하기위해 라우팅 처리를 해주는것이다.
router.get('/main',function(req,res){
	res.sendFile(dirName + "/public/main.html")
})

//export해줘서 다른곳에서 사용할 수 있도록해준다
module.exports = router;
