var express= require('express');
var cookieParser = require('cookie-parser');
var session= require('express-session');
var bodyParser= require('body-parser');

module.exports=app=>{
	app.set('view engine', 'ejs');
	app.use(express.static('public'));
	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(session({secret:'it'}));
}