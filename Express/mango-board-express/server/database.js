import sqlite3 from 'sqlite3';

const db = new sqlite3.Database(__dirname + '/../mango_board.db')

const queries = [
    "create table users(id text primary key, pw text, name text, email text,  phone text, address text)", 
    "create table articles(id integer primary key autoincrement, hit INTEGER DEFAULT 0,date time DATETIME NOT NULL DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime')), title varchar(20), contents text)"
]

queries.forEach((query)=>{
    db.run(query,(err)=>{
        console.log(err)
    })
})

export default db;