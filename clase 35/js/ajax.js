(function(){

	var Latitude = 21.473072;
	var Longitude = -104.855593;


	$.ajax({
		type: 'GET',
		url : 'http://api.openweathermap.org/data/2.5/weather?lat='+ Latitude +'&lon=' + Longitude + "&units=metric&appid=9f50a805aa0089a1edd1829a5db029f0",
		dataType: 'jsonp'
	})
	.done(function( data ){
		
		console.log("Correcto!");
		console.log( data ); // Se imprime en consola la api

		mostrar_data( data );


	})
	.fail(function(){
		console.log("Fallo!");
	})
	.always(function(){
		console.log("Completo!");
	});



	// =====================================
	//  Funcion para mostrar toda la data
	//  y dejar la peticion AJAX mas limpia
	// =====================================
	function mostrar_data( data ){

		// Imagen
		var url = "img/" + data.weather[0].icon + ".png";
		$(".imgClima").attr('src', url);

		var temperatura = Math.round(data.main.temp);
		$(".lblTemperatura").html( temperatura + "&#176;" );

		var ciudad = data.name;
		$(".lblCiudad").html(ciudad);

		$(".divLoading").fadeOut(200,function(){
			$(".divInfo").fadeIn(200);
		});
					

	}





})();