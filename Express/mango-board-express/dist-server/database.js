"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sqlite = _interopRequireDefault(require("sqlite3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var db = new _sqlite["default"].Database(__dirname + '/../mango_board.db');
var _default = db;
exports["default"] = _default;