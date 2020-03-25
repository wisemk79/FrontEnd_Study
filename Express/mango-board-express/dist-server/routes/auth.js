"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); // 로그인


router.post('/login', function (req, res, next) {
  console.log(req.body);
  var _req$body = req.body,
      id = _req$body.id,
      pw = _req$body.pw;
  var responseData = {};

  _database["default"].serialize(function () {
    // db.run('CREATE TABLE articles (id integer primary key autoincrement, title varchar(20), contents text)'); 
    var stmt = _database["default"].prepare("select id, pw from users where id=?"); // console.log("실행됨");


    stmt.get(id, function (err, row) {
      if (err) {
        console.log('에러임');
      }

      if (row) {
        console.log("rows", row);
        responseData.logged = row; // console.log('들어옴',responseData)

        console.log(responseData);
        res.json({
          login: true
        });
      } else {
        console.log('error');
      }
    });
  });
});
var _default = router;
exports["default"] = _default;