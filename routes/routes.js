const db = require('../api.js');

module.exports=app=>{
	app.route("/")
		.get(function(req,res){
		res.render('educator');
		
	})
		.post(function(req,res){
		var n=req.body;
		db.edapi(n.educator_username,n.educator_password,req,res);

		app.get("/:id",function(req,res){
		if(req.params.id=="dashboard"){
          if(req.session.user){
            res.render("educator");
          }
        else{
            res.render("dashboard");
        }
      }

      if(req.params.id=="create_exam"){
        if(req.session.user){
			res.render("educator");
          }
        else{
          res.render("create_exam");
        }
          }

         if(req.params.id=="ques_set"){
        if(req.session.user){
			res.render("educator");
          }
        else{
          res.render("ques_set");
        	}
        }

        if(req.params.id=="signout"){
            req.session.destroy();
            res.redirect("/");
      }

        
  });
	})

	
	app.post("/create_exam",function(req,res){
			var n=req.body;
			x=req.body.Totques;
			db.examapi(n,req,res);
		});

	
		app.post("/ques_set",function(req,res){
			var n=req.body;
			db.qaApi(n,req,res);
			
			
			
			
		});
		
}


 
	



