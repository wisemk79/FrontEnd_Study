"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

var stmt = _database["default"].prepare("insert into score values(?,?)");

router.post('/', function (req, res, next) {
  console.log(req.body);
  stmt.run(req.body.name, req.body.score, function (err) {
    if (err) {
      res.json("에러");
    } else {
      res.json("데이터 입력 완료");
    }
  });
});

var stmt2 = _database["default"].prepare("select * from score");

router.get('/', function (req, res, next) {
  var responseData = {};
  stmt2.all(function (err, rows) {
    console.log(rows);

    if (err) {
      console.log(err, '에러임');
    }

    if (rows) {
      responseData.scores = rows;
      res.json(rows);
    } else {
      console.log('error');
    }
  });
});
var _default = router;
exports["default"] = _default;