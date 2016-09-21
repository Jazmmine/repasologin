window.addEventListener("load", function(){
	var btn = document.getElementById("enviar");
	btn.addEventListener("click", function(){
		var usuario = document.getElementById("usuario").value;
		var correo = document.getElementById("email").value;
		var contrasenia = document.getElementById("password").value;
		var expregUsuario = /^[A-Z]{1,2}\s\d{4}\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$/;
		var expresionCorreo = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
		var noContrasenia = "contraseña";
		var noNumberUno = 123456;
		var noNumberDos = 987654;

		if (usuario.length < 8) {
			alert ("Ingrese usuario valido");
		}
		if (usuario[0] != usuario[0].toUpperCase()) {
			alert ("La primera letra de su usuario debe estar en mayúscula");
		}
		if (usuario != expregUsuario.test(usuario)) {
			alert ("Ingrese usuario que tenga una combinación de letras y números");
		}
		if (correo.length == 0) {
			alert ("Ingresar correo electrónico");
		}
		if (correo != expresionCorreo.test(correo)) {
			alert ("Validar que sea un correo electrónico");
		}
		if (contrasenia.length < 6) {
			alert ("Ingrese contraseña valida");
		}
		if (contrasenia == noContrasenia.value || contrasenia == noNumberUno.value || contrasenia == noNumberDos.value) {
			alert ("Ingrese contraseña correcta"); 
		}
	});
});