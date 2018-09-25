var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'loser57',
	database: "SCB"
});

con.connect(function(err){
	if(err) throw err;
	console.log('Connected');
	var sql = "SELECT * FROM USUARIOS WHERE EMAIL_US = 'marcoshtj@gmail.com'";
		con.query(sql, function(err, rows){
			if(err) throw err;
			console.log(rows.length);
		});
});