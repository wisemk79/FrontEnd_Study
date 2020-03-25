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
  if (req.query) {// console.log(req.query)
  }

  _database["default"].serialize(function () {
    // console.log("articleList실행됨");
    // select * from articles limit 추출할 행 갯수 offset 첫행;
    var stmt = _database["default"].prepare('select * from articles order by id desc limit ? offset ?');

    var responseData = {};
    var countRow = 10;
    var num = 0;

    if (req.query.size > 1) {
      countRow = req.query.size;
    }

    if (req.query.page > 1) {
      num += req.query.size * (req.query.page - 1);
    }

    console.log(num);
    stmt.all(countRow, num, [], function (err, rows) {
      // console.log(rows)
      if (err) {
        console.log(err, '에러임');
      }

      if (rows) {
        // console.log('들어옴',rows)
        responseData.items = rows; // console.log('들어옴',responseData)
      } else {
        console.log('error');
      }
    });
    stmt = _database["default"].prepare("SELECT count(*) count FROM articles");
    stmt.get(function (err, row) {
      if (err) {
        console.log(err, '에러임');
      }

      if (row) {
        console.log('들어옴', row);
        responseData.count = row; // console.log('들어옴',responseData)

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

    var stmt2 = _database["default"].prepare("update articles set hit = hit + 1 where id=?");

    stmt2.run(req.path.replace("/", ""));
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

var _default = router;
exports["default"] = _default;