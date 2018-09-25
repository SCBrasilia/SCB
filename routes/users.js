var express = require('express');
var router = express.Router();
const db = require('../bd');
/* GET users listing. */
router.get('/singnup', function(req, res, next) {
  	if(req.query.fail)
  		res.render('singnup', {message: 'falha no cadastro do usuario, tente novamente mais tarde!'});
  	else{
  		if (req.query.contains){
  			res.render('singnup', {message: 'Email ja cadastrado!'});
  		}
  		else{
		res.render('teste', {message: 'Cadastro realizado com sucesso!'});
	}
	}
})

 router.get('/erroEmail', function(req, res, next){
 	res.render('singnup', {message: 'Email invalido!'})
 });

 router.get('/avisoEmail', function(req, res, next){
 	res.render('avisoEmail', {message: req.query.email});
 });

/* POST users listing: */
router.post('/singnup', function(req, res, next){
	db.createUser(req.body.inputNome, req.body.inputSexo, req.body.inputEmail, req.body.inputPassword, req.body.inputCPassword, req.body.inputCidade, (err, result, contains) =>{
		if(err) { 
			throw err;
			res.redirect('singnup?fail=true');
		}else{
			require('../mail')(req.body.inputEmail, req.body.inputNome, 'Bem vindo ao SCBrasilia, Ative sua conta!', (error)=>{
				if(error){
					throw err;
					res.redirect('erroEmail');
				}else{
					if(contains){
					res.redirect('singnup?contains=true');
					}
					else{
						res.redirect('avisoEmail?email='+req.body.inputEmail);		
					}
				}
			});
		}
	});
});
router.get('/404', function(req, res, next) {
  		res.render('404', { message: null });
	
});

module.exports = router;
