import express from 'express';
import db from '../database';

const router = express.Router();

// 로그인
router.post('/', (req, res, next) => {
  console.log("로그인 라우터 실행 "+req.body)
  const {mem_id, mem_pw} = req.body;
  const responseData={}

  db.serialize(() => {
    // db.run('CREATE TABLE articles (id integer primary key autoincrement, title varchar(20), contents text)'); 
    const stmt = db.prepare("select id, pw from register where id=? and pw=?")
    // console.log("실행됨");
    stmt.get(mem_id,mem_pw, (err,row)=>{
        if(err){
          console.log('에러임')
        }
        if(row){
          console.log("rows",row)
          responseData.logged = row;
          // console.log('들어옴',responseData)
          console.log(responseData)
          res.json({isLogged: true, id:row.id, session:"세션생김"})
        }else{
          res.json({isLogged: false})
          console.log('error');
        }
    })
  })
});




export default router;
