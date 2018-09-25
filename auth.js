const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy;
const passport =require('passport');
var mysql = require('mysql');
var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'loser57',
	database: "SCB"
});
module.exports = function(passport){

	passport.serializeUser(function(result, done){
		done(null,{
			id_user: result.ID_US,
			status: result.STATUS_US
		});
	});
	passport.deserializeUser(function(id, done){
		var sql = "SELECT USUARIOS.ID_US, USUARIOS.NOME_US, USUARIOS.SEXO_US, USUARIOS.END_US, USUARIOS.EMAIL_US, USUARIOS.SENHA_US, USUARIOS.STATUS_US, FOTOS_US.CAMINHO_FOTO FROM USUARIOS LEFT JOIN FOTOS_US ON FOTOS_US.ID_US = USUARIOS.ID_US WHERE USUARIOS.ID_US = ?"
		con.query(sql, [id.id_user], function(err, result, rows){
			done(err, result[0]);
		});
	});

	passport.use(new localStrategy({
		usernameField: 'inputEmail_login',
		passwordField: 'inputSenha_login',
		passReqToCallback: true
	},
	function(req, email, password, done){
		var sql = "SELECT * FROM USUARIOS WHERE EMAIL_US = ?";
		con.query(sql, [email], function(err, result, rows){
			if(err)
				return done(err);
				if(!rows.length){
					return done(null, false);
				}
				bcrypt.compare(password, result[0].SENHA_US, (err, isValid) =>{
					if(err){return done(err)}
					if(!isValid){return done(null, false)}
					return done(null, result[0]);
				//console.log('Usuario autenticado'+ result[0].ID_US);
				});
				
		})
	}
	))
}