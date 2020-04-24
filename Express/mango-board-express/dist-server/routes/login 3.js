"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); // 로그인


router.post('/', function (req, res, next) {
  console.log(req.body);

  _database["default"].serialize(function () {
    // db.run('CREATE TABLE articles (id integer primary key autoincrement, title varchar(20), contents text)'); 
    var stmt = _database["default"].prepare("insert into articles(title, contents) values(?,?)"); // console.log("실행됨");


    stmt.run(req.body.title, req.body.contents);
  });

  res.json({
    message: "post works!"
  });
});
process.on('exit', function () {
  _database["default"].close();
});
var _default = router;
exports["default"] = _default;