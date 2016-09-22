window.addEventListener("load", function(){
	var btn = document.getElementById("enviar");
	btn.addEventListener("click", function(){
		var usuario = document.getElementById("usuario").value.trim();
		var correo = document.getElementById("email").value.trim();
		var contrasenia = document.getElementById("password").value.trim();

//validacion de usuario
		var tieneLetra = false;
		var tieneNumero = false;

		for (var i = 0; i < usuario.length; i++) {
			var caracterEvaluar = usuario[i];
			var valorNumerico = parseInt(caracterEvaluar);
			//var esNumero = !isNaN(valorNumerico);
			if (isNaN(valorNumerico)) {
				//es letra
				tieneLetra = true;
			}else{
				//es numero
				tieneNumero = true;

			}
		
		}

		if (tieneLetra && tieneNumero) {

		}else{
			alert("validar que tenga una combinación de letras y números");
		}


		return false;
		if (usuario.length < 8) {
			alert ("Ingrese caracteres para usuario valido");
		}
		if (usuario[0] != usuario[0].toUpperCase()) {
			alert ("La primera letra de su usuario debe estar en mayúscula");
		}


//validacion de correo
		var posicionA = correo.indexOf("@");
		var posicionP = correo.lastIndexOf(".");

		if (posicionA > 1 && posicionA + 1 < posicionP  && posicionP < correo.length - 2) {

		} else { 
			alert("Correo Invalido");
		}



//validacion de contraseña
		if (contrasenia.length < 6) {
			alert("Ingrese mínimo 6 caracteres");
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