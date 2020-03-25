"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sqlite = _interopRequireDefault(require("sqlite3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var db = new _sqlite["default"].Database(__dirname + '/../mango_board.db');
var queries = ["create table users(id text primary key, pw text, name text, email text,  phone text, address text)", "create table articles(id integer primary key autoincrement, hit INTEGER DEFAULT 0,date time DATETIME NOT NULL DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime')), title varchar(20), contents text)"];
queries.forEach(function (query) {
  db.run(query, function (err) {
    console.log(err);
  });
});
var _default = db;
exports["default"] = _default;