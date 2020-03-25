import express from 'express'
import db from '../database'

const router = express.Router();

const stmt = db.prepare("insert into score values(?,?)")

router.post('/', (req, res,  next)=>{
    console.log(req.body)
    stmt.run(req.body.name,req.body.score,(err=>{
        if(err){
            res.json("에러")
        }else{
            res.json("데이터 입력 완료")
        }
    }))
})

let stmt2 = db.prepare("select * from score")
router.get('/', (req, res,  next)=>{
    let responseData={}
    stmt2.all((err,rows) => {
        console.log(rows)
        if(err){
          console.log(err,'에러임')
        }
        if(rows){
          responseData.scores = rows;
          res.json(rows)
        }else{
          console.log('error');
        }})
})

export default router;