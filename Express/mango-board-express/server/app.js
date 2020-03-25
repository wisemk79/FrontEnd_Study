import express from 'express';
import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import articlesRouter from './routes/articles';
import authRouter from './routes/auth'
import joinRouter from './routes/join'
import cors from 'cors'//app.js에서 middle ware를 구축해야됨
import process from 'process'
import scoreRouter from './routes/score'


const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/articles', articlesRouter);
app.use('/auth', authRouter);
app.use('/join', joinRouter);
app.use('/score', scoreRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

process.on('exit',()=>{
  db.close()
})

export default app;
