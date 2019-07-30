var express=require('express');
var app=express();

const middleware = require('./middleware');
middleware(app);

const route = require('./routes/routes');
route(app);

app.listen(3000,function(req,res){
	console.log("your server starts at port 3000");
});