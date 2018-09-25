const bcrypt = require('bcrypt');
var mysql = require('mysql');
var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'loser57',
	database: "SCB"
});

function createUser(inputNome, inputSexo, inputEmail, inputPassword, inputCPassword, inputCidade, callback){
	const cryptPwd = bcrypt.hashSync(inputPassword, 10);
	con.connect(function(err, contains){
	if(err) throw err;
	console.log('Connected');
			var strsql = "SELECT * FROM USUARIOS WHERE EMAIL_US = ?"
		con.query(strsql, [inputEmail], function(err, rows){
			if(err) throw err;
			//usuario existe
			if (rows[0]){
				console.log('usuario encontrado...');
				contains = true;
				callback(err, rows, contains);
			}else{
				console.log('usuario nao existe, inserindo...')
				var sql = "insert into USUARIOS(NOME_US, SEXO_US, END_US, EMAIL_US, SENHA_US, STATUS_US) values ?";
				var values = [[inputNome, inputSexo, inputCidade, inputEmail, cryptPwd, 0]];
				con.query(sql, [values],
				function(err, result, fields){
					if(err) throw err;
					callback(err, result.insertId, null);
				});
			}
		});

});

}

function activeUser(email, callback){
	var sql_active = 'UPDATE USUARIOS SET STATUS_US = 1 WHERE EMAIL_US = ?';
	con.query(sql_active, [email], function(err, result){
		if (err) throw err;
		callback(err, result);
	})
}

function getFriends(id, callback){
	var sql_active = 'SELECT AMIGOS_US.ID_1, USUARIOS.ID_US, USUARIOS.NOME_US, FOTOS_US.CAMINHO_FOTO FROM AMIGOS_US INNER JOIN USUARIOS ON (USUARIOS.ID_US = AMIGOS_US.ID_1 OR USUARIOS.ID_US = AMIGOS_US.ID_2) LEFT JOIN FOTOS_US ON (FOTOS_US.ID_US = USUARIOS.ID_US AND FOTOS_US.IS_PERFIL = 1) WHERE (AMIGOS_US.ID_1 = '+id+' OR AMIGOS_US.ID_2 = '+id+') AND USUARIOS.ID_US <> '+id;
	con.query(sql_active, function(err, result){
		if (err) throw err;
		callback(err, result);
	})
}

function searchUser(param, callback){
	var a = "%"+param+"%";
	var sql_search = "SELECT USUARIOS.NOME_US, USUARIOS.SEXO_US, USUARIOS.END_US, USUARIOS.EMAIL_US, FOTOS_US.CAMINHO_FOTO FROM USUARIOS INNER JOIN FOTOS_US ON FOTOS_US.ID_US = USUARIOS.ID_US WHERE USUARIOS.NOME_US LIKE ? ";
	con.query(sql_search, [a], function(err, result){
		if(err) throw err;
		callback(err, result);
	});
}

function setMessage(id_tr, id_rc, msg, callback){
	var sql_isrt_msg = "INSERT INTO MESSAGES_US(ID_TR, ID_RC, TEXTO) VALUES("+id_tr+", "+id_rc+", '"+msg+"')";
	con.query(sql_isrt_msg, function(err, result){
		if(err) throw err;
		callback(err, result);
	});
}
function getMessages(id_me, id_rc, callback){
	var sql_getMsg = "SELECT ID_TR, ID_RC, TEXTO, DATE_FORMAT(DT_MSG, '%d-%m-%Y : %T') AS DT_MSG, (CASE WHEN ID_TR = "+id_me+" THEN 'MYMESSAGE' ELSE 'RCMESSAGE' END) AS CLASS FROM MESSAGES_US WHERE (MESSAGES_US.ID_TR = "+id_me+" AND MESSAGES_US.ID_RC = "+id_rc+") OR (MESSAGES_US.ID_TR = "+id_rc+" AND MESSAGES_US.ID_RC = "+id_me+") AND MESSAGES_US.STATUS = 1 ORDER BY MESSAGES_US.DT_MSG ASC";
	con.query(sql_getMsg, function(err, result){
		if(err)throw err;
		callback(err, result);
	});
}


module.exports = {createUser, activeUser, getFriends, searchUser, setMessage, getMessages}