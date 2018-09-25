module.exports = function(to, name, subject, callback){
	const mailer = require("nodemailer");

	//usando SMTP para envio

	const smtpTransport = mailer.createTransport('smtps://desenvolvimento.scb%40gmail.com:Acerola123@smtp.gmail.com')

	const message = {
		from: process.env.SMTP_USERNAME,
		to,
		subject,
		html: '<div><p>'+name+' seja bem vindo ao <b>SCB</b> <a href="http://localhost:3000/active?email='+to+'">Clique aqui para ativar sua conta!</a></p></div>'

	}

	smtpTransport.sendMail(message, function(error, response){
		if(error){
			console.log(error);
			callback(error);
		}else{
			console.log("Email enviado: " + response.message);
			callback();		
		}
		smtpTransport.close();
	})
}