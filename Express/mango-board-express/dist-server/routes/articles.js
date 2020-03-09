"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
/* GET users listing. */


router.get('/', function (req, res, next) {
  _database["default"].serialize(function () {
    // console.log("articleList실행됨");
    var query = "select * from articles";
    var responseData = {};

    _database["default"].all(query, [], function (err, rows) {
      // console.log(rows)
      if (err) {
        console.log(err, '에러임');
      }

      if (rows) {
        responseData.items = rows; // console.log('들어옴',responseData)

        res.json(responseData);
      } else {
        console.log('error');
      }
    });
  });
});
router.get('/:id', function (req, res, next) {
  // console.log(req.path.replace("/",""))
  _database["default"].serialize(function () {
    // console.log("article실행됨");
    var stmt = _database["default"].prepare("select * from articles where id=?");

    var responseData = {};
    stmt.get(req.path.replace("/", ""), function (err, row) {
      // console.log(row)
      if (err) {
        console.log(err, '에러임');
      }

      if (row) {
        responseData.item = row; // console.log('들어옴',responseData)

        res.json(responseData);
      } else {
        console.log('error');
      }
    });
    stmt.finalize();
  });
});
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
router["delete"]('/:id', function (req, res, next) {
  console.log("삭제칸들어옴");

  _database["default"].serialize(function () {
    var stmt = _database["default"].prepare("delete from articles where id=?");

    stmt.run(req.path.replace("/", ""));
  });

  res.json({
    message: "It works!"
  });
});
router.put('/:id', function (req, res, next) {
  console.log('업데이트칸 들어옴');
  console.log(req.body, req.path.replace("/", ""));

  _database["default"].serialize(function () {
    var stmt = _database["default"].prepare("update articles set title=?, contents=? where id=?");

    stmt.run(req.body.title, req.body.contents, req.path.replace("/", ""));
  });

  res.json({
    message: "It works!"
  });
}); // db.run('CREATE TABLE articles (id integer primary key autoincrement, title varchar(20), contents text)'); 

process.on('exit', function () {
  _database["default"].close();
});
var _default = router;
exports["default"] = _default;