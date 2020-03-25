import express from 'express';
import db from '../database';

const router = express.Router();

// 로그인
router.post('/login', (req, res, next) => {
  console.log(req.body)
  const {id, pw} = req.body;
  const responseData={}

  db.serialize(() => {
    // db.run('CREATE TABLE articles (id integer primary key autoincrement, title varchar(20), contents text)'); 
    const stmt = db.prepare("select id, pw from users where id=?")
    // console.log("실행됨");
    stmt.get(id, (err,row)=>{
        if(err){
          console.log('에러임')
        }
        if(row){
          console.log("rows",row)
          responseData.logged = row;
          // console.log('들어옴',responseData)
          console.log(responseData)
          res.json({login: true})
        }else{
          console.log('error');
        }
    })
  })
});


export default router;
