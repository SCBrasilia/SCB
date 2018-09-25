$(document).ready(function(){
	var socket = io.connect("http://localhost:3000");
	var ready = false;
});

$("#submit").submit(function(e) {
	e.preventDefault();
	$("#nick").fadeOut();
	$("#chat").fadeIn();
	var name = $("#nickname").val();
	var time = new Date();

	$("#name").html(name);

	$("#time").html('first login: ' + time.getHours() + ':' + time.getMinutes());

	ready = true;
	socket.emit("join", name);

});

socket.on("update", function(msg){
	if(ready){
		$(".chat").append('<li class="info"' + msg + '</li>')
	}
});

socket.on("chat", function(client, msg){
	if(ready){
		var time = new Date();
		$(".chat").append('<li class="ather"><div class="msg"><span>' + client + ': </span><p>' + msg + '</p><time>' + time.getHours() + ':' + time.getMinutes() + '</time> </div> </li>');
	}
})