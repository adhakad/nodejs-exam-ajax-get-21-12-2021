
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


var dashboardRouter = require('./routes/dashboard');



var teacherAdminDashboardRouter = require('./routes/adminTeacher/teacher-admin-dashboard');
var questionsRouter = require('./routes/adminTeacher/questions');


app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  secret:'kE3l$N9K=Od2nc>XKJEU',
  resave:false,
  saveUninitialized:true,
}));

app.use('/',dashboardRouter);

app.use('/teacher-admin-dashboard', teacherAdminDashboardRouter);
app.use('/questions', questionsRouter);
module.exports = app;