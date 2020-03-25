import express from 'express';
import db from '../database';
import config from '../config'
import code from '../code'
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

// https://www.npmjs.com/package/crypto-js


const router = express.Router();

router.post('/', (req, res, next) => {
  console.log(req.body)
  console.log(config.appKey)
  try {
    const {id, pw, name, email, phone, address} = req.body;
    const key = config.appKey;
    const hashPassword = Base64.stringify(hmacSHA512(pw, key));
    console.log(hashPassword)

      // db.run('CREATE TABLE articles (id integer primary key autoincrement, title varchar(20), contents text)'); 
      const stmt = db.prepare("insert into users(id, pw, name, email, phone, address) values(?,?,?,?,?,?)")
    
      stmt.run(id, hashPassword, name, email, phone, address,(err)=>{
          console.log("실행됨");
        if(err){
            console.log(err)
            res.json(
              {
                error: "user already exists",
                code: code.JOIN_DUPLICATED_ID,
              })
        }
        else{
            res.json(
              {
                result: "user created",
                code:code.OK,
              })
        }
      });
    } catch (error) {
      console.log(error)    
    }

  });



export default router;
