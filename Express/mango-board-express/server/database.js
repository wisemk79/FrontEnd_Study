import sqlite3 from 'sqlite3';

const db = new sqlite3.Database(__dirname + '/../mango_board.db')

export default db;