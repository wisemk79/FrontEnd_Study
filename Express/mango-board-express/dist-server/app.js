"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _articles = _interopRequireDefault(require("./routes/articles"));

var _auth = _interopRequireDefault(require("./routes/auth"));

var _join = _interopRequireDefault(require("./routes/join"));

var _cors = _interopRequireDefault(require("cors"));

var _process = _interopRequireDefault(require("process"));

var _score = _interopRequireDefault(require("./routes/score"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//app.js에서 middle ware를 구축해야됨
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public')));
app.use('/articles', _articles["default"]);
app.use('/auth', _auth["default"]);
app.use('/join', _join["default"]);
app.use('/score', _score["default"]); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  next((0, _httpErrors["default"])(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
});

_process["default"].on('exit', function () {
  db.close();
});

var _default = app;
exports["default"] = _default;