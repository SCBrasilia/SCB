var express = require('express');
var router = express.Router();
var passport = require('passport');
const db = require('../bd');
var multer = require('multer');
var storage = multer.diskStorage({
	destination: function(req, res, cb){
		cb(null, 'public/images');
	},
	filename: function(req, file, cb){
		var ext = file.originalname.substr(file.originalname.lastIndexOf('.')+1);
		cb(null, file.fieldname+'-'+Date.now()+'.'+ext);
	}
});
var upload = multer({storage: storage});
/* GET home page. */
router.get('/', authenticationMiddleware(), function(req, res, next) {
	if(req.isAuthenticated()){
		if(req.user.STATUS_US == 1){
			var usuario = {
					id_us: req.user.ID_US,
					nome_us: req.user.NOME_US,
					foto_us: req.user.CAMINHO_FOTO
				}
				var friendsArray = new Array();
				db.getFriends(usuario.id_us, (err, result) => {
					if (err) {
						console.log(err)
					}else{
						for (var i = 0; i < result.length; i++) {
							friendsArray[i] = {id_amg: result[i].ID_US, nm_amg: result[i].NOME_US, img_amg: result[i].CAMINHO_FOTO}; 
						}
							res.render('initial', {usuario: usuario, friendsArray: friendsArray});
							console.log(req.user.STATUS_US);
					}
				});	
			}else{
				res.render('avisoEmail', {message: 'Reenviar e-mail'})
			}
	}else{
		res.render('login');
	}
});
router.post('/file', upload.single('foto_perfil'), function(req, res, next){
	console.log(req.file);
});

router.post('/post_in_time_line', function(req, res, next){
	console.log(req.body.msg_post);
});

router.post('/search_users', function(req, res, next) {
	if(req.body.nome){
  		if(req.query.nome != ""){
  			var usuarios_found = new Array();
  			db.searchUser(req.body.nome, (err, result)=>{
  				if (err) {
  					console.log(err)
  				}else{
  					for(var i=0; i < result.length; i++){
  						usuarios_found[i] = {nome_us_fd: result[i].NOME_US, end_us_fd: result[i].END_US, sexo_us_fd: result[i].SEXO_US, foto_us_fd: result[i].CAMINHO_FOTO};
  					}
  					console.log(usuarios_found[0]);
  					res.render('resultSearch', {message: null, usuarios_found: usuarios_found});
  				}
  			});  			
  		}else{
  			res.render('resultSearch', {message: 'Nenhum usuario encontrado', usuarios_found: null});
  		}
  	}else{
  		res.render('resultSearch', {message: 'Error', usuarios_found: null});
  	}
	
});

router.post('/getMessages', function(req, res, next){
	if(req.isAuthenticated()){		
		
		var messages = new Array();
		db.getMessages(req.body.id_me, req.body.id_rc, (err, result)=>{
			if(err){
				console.log(err);
			}else{
				for(var ii=0; ii<result.length; ii++){
					messages[ii] = {id_me: result[ii].ID_TR, id_rc: result[ii].ID_RC, msg: result[ii].TEXTO, dt_msg: result[ii].DT_MSG, class: result[ii].CLASS};
				}
				res.render('messages', {messages: (result.length == 0 ? null : messages)});
			}
		});
	}else{
		res.send('<script>window.location.href = "/"</script>');
	}

});

router.get('/active', function(req, res, next){
	if (req.query.email != '' || req.query.email != null) {
		db.activeUser(req.query._id, (err, result) =>{
			if(err)
				res.redirect('/login?fail=true');
			else
				res.redirect('/avisoEmail');
		});
	}
});

router.get('/chat', function(req, res, next) {
  		res.render('chat');
	
});

router.get('/singnup', function(req, res, next) {
  		res.render('singnup', { message: null });
	
});

router.get('/avisoEmail', function(req, res, next){
 	res.render('avisoEmail');
 });

router.get('/myProfile', function(req, res, next) {
	if(req.isAuthenticated()){
	var usuario = {nome: req.user.NOME_US, foto_perfil: req.user.CAMINHO_FOTO};
  		res.render('myProfile', {usuario: usuario});	
	}
});

router.get('/404', function(req, res, next) {
  		res.render('404', { message: null });
	
});

function authenticationMiddleware(){
	return function(req, res, next){
		if(req.isAuthenticated()){
			return next();
		}
		res.redirect('/login?fail=true');
	}
}

router.get('/teste', authenticationMiddleware(), function(req, res){
	res.render('teste', {nome_us: req.user.NOME_US})
});

router.get('/login', function(req, res){
	if(req.query.fail)
		res.render('login', {message: 'Usuario e/ou senha incorretos'});
	else
		res.render('login', {message: null});
})

router.post('/login',
	passport.authenticate('local'), function(req, res){
		res.redirect('/');
	}
	);

module.exports = router;
