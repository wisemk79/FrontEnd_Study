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
  console.log("로그인 라우터 실행 " + req.body);
  var _req$body = req.body,
      id = _req$body.id,
      pw = _req$body.pw;
  var responseData = {};

  _database["default"].serialize(function () {
    // db.run('CREATE TABLE articles (id integer primary key autoincrement, title varchar(20), contents text)'); 
    var stmt = _database["default"].prepare("select id, pw from register where id=? and pw=?"); // console.log("실행됨");


    stmt.get(id, pw, function (err, row) {
      if (err) {
        console.log('에러임');
      }

      if (row) {
        console.log("rows", row);
        responseData.logged = row; // console.log('들어옴',responseData)

        console.log(responseData);
        res.json({
          isLogged: true,
          id: row.id,
          session: "세션생김"
        });
      } else {
        res.json({
          isLogged: false
        });
        console.log('error');
      }
    });
  });
});
var _default = router;
exports["default"] = _default;