const mysql=require("mysql");
// var keys= require('./config/keys');
module.exports={
	connects:function(){
	const connection=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"divyanshigarg123@#",
	database:"examdb"
	});

	connection.connect(function(error){
		if(!error)console.log("db connection succeeded");
		else console.log(error);
	});
	return connection;
}
	
};

