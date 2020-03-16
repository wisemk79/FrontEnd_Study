import express from 'express';
import db from '../database';

const router = express.Router();

router.post('/', (req, res, next) => {
    console.log(req.body)
  
    db.serialize(() => {
      // db.run('CREATE TABLE articles (id integer primary key autoincrement, title varchar(20), contents text)'); 
      const stmt = db.prepare("insert into articles(title, contents) values(?,?)")
      // console.log("실행됨");
      stmt.run(req.body.title, req.body.contents)
    })
    
    res.json({message: "post works!"})
  });

  process.on('exit',()=>{
    db.close()
  })

export default router;
