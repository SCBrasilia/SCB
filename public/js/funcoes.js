/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function cadastrar() {
    if (veiricaCampos() != false) {
        document.getElementById('form_cadastro').submit();
    }
}

function enviarFoto(){
    var tamanhoImagem = parseInt(document.getElementById('form_foto_perfil').files[0].size);
    if((tamanhoImagem/(1024*1024)).toFixed(1) <= 2.0){
        document.getElementById('upload_perfil').submit();
    }else{
        $("#aviso_tamanho").text('tamanho da imagem nao pode ser superior a 2MB!');
    }
    //document.getElementById('upload_perfil').submit();
}

function veiricaCampos() {
    var senha;
    var senhaC;
    var email = $("[name=inputEmail]").val();
    if ($("[name=inputNome]").val().length < 3) {
        $("#aviso_nome").text("Este campo é obrigatorio com minimo 3 caracteres!");
        return false;
    } else {
        $("#aviso_nome").text("");
    }
    if ($("[name=inputSexo]").val().length == '-1') {
        $("#aviso_sexo").text("Por favor selecione uma opçao!");
        return false;
    } else {
        $("#aviso_sexo").text("");
    }
    if (email != "") {
        var filtro = /^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/;
        if (filtro.test(email)) {
            $("#aviso_email").text("");
        } else {
            $("#aviso_email").text("Este endereço de email não é válido!");
            return false;
        }
    } else {
        $("#aviso_email").text('Digite um email!');
        return false;
    }
    if ($("[name=inputPassword]").val().length < 6 ||$("[name=inputPassword]").val().length > 10) {
        $("#aviso_senha").text("Para sua segurança a senha deve conter no minimo 6 e maximo 10 caracteres!");
        return false;
    } else {
        $("#aviso_senha").text("");
    }
    senha = $("[name=inputPassword]").val();
    senhaC = $("[name=inputCPassword]").val();
    if (senha != senhaC) {
        $("#aviso_Csenha").text("As senha não coeincidem, favor verifique e tente novamente!");
        return false;
    } else {
        $("#aviso_Csenha").text("");
    }
}
function verificarLogin(){
    var email = $("[name=inputEmail_login]").val();
    if (email != "") {
        var filtro = /^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/;
        if (filtro.test(email)) {
            $("#aviso_email_login").text("");
        } else {
            $("#aviso_email_login").text("Este endereço de email não é válido!");
            return false;
        }
    } else {
        $("#aviso_email_login").text('Digite um email!');
        return false;
    }
    if($("[name=inputSenha_login]").val().length == 0){
        $("#aviso_senha_login").text("Insira uma senha!");
        return false;
    }else{
        $("#aviso_senha_login").text("");
    }
}
function logar(){
    if(verificarLogin() != false){
        document.getElementById('form_login').submit();
    }
}