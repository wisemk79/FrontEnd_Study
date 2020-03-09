import express from 'express';
import db from '../database';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  db.serialize(() => {
    // console.log("articleList실행됨");
    const query = "select * from articles"
    const responseData = {}
    db.all(query, [],(err,rows) => {
      // console.log(rows)
      if(err){
        console.log(err,'에러임')
      }
      if(rows){
        responseData.items = rows;
        // console.log('들어옴',responseData)
         res.json(responseData)
      }else{
        console.log('error');
      }
    })
  })
  
});

router.get('/:id', (req, res, next)=>{
  // console.log(req.path.replace("/",""))
  db.serialize(() => {
    // console.log("article실행됨");
    const stmt = db.prepare("select * from articles where id=?")
    const responseData = {}
    stmt.get(req.path.replace("/",""),(err,row)=>{
      // console.log(row)
      if(err){
        console.log(err,'에러임')
      }
      if(row){
        responseData.item = row;
        // console.log('들어옴',responseData)
         res.json(responseData)
         
      }else{
        console.log('error');
      }

    })
    stmt.finalize();
      
  })
})

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

router.delete('/:id', (req, res, next)=>{
  console.log("삭제칸들어옴");
  db.serialize(() => {
    const stmt = db.prepare("delete from articles where id=?")
    stmt.run(req.path.replace("/",""))
  })
  res.json({message: "It works!"})
})

router.put('/:id', (req, res, next)=>{
  console.log('업데이트칸 들어옴')
  console.log(req.body, req.path.replace("/",""))
  db.serialize(() => {
    const stmt = db.prepare("update articles set title=?, contents=? where id=?")
    stmt.run(req.body.title, req.body.contents, req.path.replace("/",""))
  })
  res.json({message: "It works!"})
})

  // db.run('CREATE TABLE articles (id integer primary key autoincrement, title varchar(20), contents text)'); 



  process.on('exit',()=>{
    db.close()
  })

export default router;
