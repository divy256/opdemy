const mysql = require('mysql');
const connect= require('./connect_dbms');

module.exports={
	edapi:function(a,b,req,res){
		const connection=connect.connects();
		var sql="SELECT * FROM educator where educator_username="+ mysql.escape(a);
          connection.query(sql,function(err, result, fields){
          if (err) console.log(err);
          else{
         	if(result[0].educator_password==b){
         	req.session.educator={educator_username:a};
           	res.cookie('educator',a).redirect('/dashboard');
           }
           else {
           	res.redirect('/');

           }
          }
         
		});
      },

      examapi:function(m,req,res){
      	const connection=connect.connects();
		var sql="SELECT max(exam_id) as counter from exam_basic;";
      	connection.query(sql,function(err, result){
	      	if (err) console.log(err) ;
	       var counter = (result[0].counter)+1;
	       // console.log(counter);
	       var sql="INSERT INTO exam_basic (exam_id,exam_name,exam_desc,total_ques,mark_per_ques,total_marks,educator_id,sub) VALUES ?";
	       var values = [
	            [counter, m.examName,m.description,m.Totques,m.markques,m.Totmarks,m.edId,m.sub]
	       ];
	       connection.query(sql, [values],function(err, result){
	       if (err) console.log(err) ;
	       // console.log(result.affectedRows);
	       res.redirect('/ques_set');
	       });
    	});
      },

      qaApi:function(n,req,res){
      const connection=connect.connects();
      var sql="INSERT INTO ques_ans(ques_statement,ques_option1,ques_option2,ques_option3,ques_options4,answer_key) VALUES ?";
      var values=[
      [n.ques_statement,n.ans_opt1,n.ans_opt2,n.ans_opt3,n.ans_opt4,n.ans_opt]

      ];
      connection.query(sql, [values],function(err, result){
	    if (err) console.log(err) ;
	});
        res.redirect("/dashboard")
      }
    
}


