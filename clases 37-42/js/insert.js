(function(){

	$("#frmData").on("submit", function(e){
		console.log(e);
		e.preventDefault();

		var formulario = $(this);
		var dataSerializada = formulario.serialize();
		console.log(dataSerializada);

		$.ajax({
			type: 'POST',
			url : 'php/servicios/postAlumnos.php',
			dataType: 'json',
			data: dataSerializada,
		})
		.done(function( data ){
			
			console.log("Correcto!");
	
			console.log( data ); // Se imprime en consola la api
	
	
		})
		.fail(function(){
			console.log("Fallo!");
		})
		.always(function(){
			console.log("Completo!");
		});
	});










})();