"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _database = _interopRequireDefault(require("../database"));

var _config = _interopRequireDefault(require("../config"));

var _code = _interopRequireDefault(require("../code"));

var _hmacSha = _interopRequireDefault(require("crypto-js/hmac-sha512"));

var _encBase = _interopRequireDefault(require("crypto-js/enc-base64"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://www.npmjs.com/package/crypto-js
var router = _express["default"].Router();

router.post('/', function (req, res, next) {
  console.log(req.body);
  console.log(_config["default"].appKey);

  try {
    var _req$body = req.body,
        id = _req$body.id,
        pw = _req$body.pw,
        name = _req$body.name,
        email = _req$body.email,
        phone = _req$body.phone,
        address = _req$body.address;
    var key = _config["default"].appKey;

    var hashPassword = _encBase["default"].stringify((0, _hmacSha["default"])(pw, key));

    console.log(hashPassword); // db.run('CREATE TABLE articles (id integer primary key autoincrement, title varchar(20), contents text)'); 

    var stmt = _database["default"].prepare("insert into users(id, pw, name, email, phone, address) values(?,?,?,?,?,?)");

    stmt.run(id, hashPassword, name, email, phone, address, function (err) {
      console.log("실행됨");

      if (err) {
        console.log(err);
        res.json({
          error: "user already exists",
          code: _code["default"].JOIN_DUPLICATED_ID
        });
      } else {
        res.json({
          result: "user created",
          code: _code["default"].OK
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
});
var _default = router;
exports["default"] = _default;