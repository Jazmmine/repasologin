window.addEventListener("load", function(){
	var btn = document.getElementById("enviar");
	btn.addEventListener("click", function(){
		var usuario = document.getElementById("usuario").value.trim();
		var correo = document.getElementById("email").value.trim();
		var contrasenia = document.getElementById("password").value.trim();
		var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if (usuario.length < 8) {
			alert ("Ingrese caracteres para usuario valido");
		}
		if (usuario[0] != usuario[0].toUpperCase()) {
			alert ("La primera letra de su usuario debe estar en mayúscula");
		}

		for (var i = 0; i < usuario.length; i++) {
			if (isNaN(parseInt(usuario[i]))){
				alert ("Congelado");
			}
		}

		if ( !expr.test(correo)) {
			alert ("Ingresar email correcto");
		}
		if (contrasenia.length < 6) {
			alert ("Ingrese mínimo 6 caracteres");
		}
		if (contrasenia === "contraseña") {
			alert ("Ingrese contraseña correcta"); 
		}
		if (contrasenia === "123456") {
			alert ("No ingresar 123456"); 
		}
		if (contrasenia === "987654") {
			alert ("No ingresar 987654"); 
		}	
	});
});