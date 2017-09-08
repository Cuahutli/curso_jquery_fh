(function(){

	$(document).ready(function(){
		$.ajax({
			type: 'GET',
			url : 'php/servicios/get.alumnos.php',
			dataType: 'json',
		})
		.done(function( data ){
			
			console.log("Correcto!");
	
			console.log( data ); // Se imprime en consola la api
			if(data.error){
				alert("algo raro paso");
				return;
			}
			
			data.alumnos.forEach(function(alumno, index){
				var content = "";
				content += '<tr id="fila'+ alumno.id +'">'
				content += '	<td>'+ alumno.id +'</td>'
				content += '	<td>'+ alumno.nombre+'</td>'
				content += '	<td class="text-center">'
				content += '		<a href="actualizar.html?id='+ alumno.id +'" class="btn btn-primary"><i class="fa fa-edit"></i></a>'
				content += '	</td>'
				content += '	<td class="text-center">'
				content += '		<a href="" data-nombre="'+ alumno.nombre +'"data-id="'+ alumno.id +'" class="btn btn-danger botEliminar"><i class="fa fa-trash-o"></i></a>'
				content += '	</td>'
				content += '</tr>'

				$("#tblRegistros").append(content);
			});
	
	
		})
		.fail(function(){
			console.log("Fallo!");
		});
				
	});

$("body").on("click", ".botEliminar", function(e){
	e.preventDefault();
	var nombre = $(this).data('nombre');
	var id = $(this).data('id');
	// cuando estamos seguros que lo deseamos borrar
	swal({
		title: '¿Estas Seguro?',
		text: "De querer borrar a " + nombre,
		type: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		confirmButtonText: 'Si, borralo!',
		cancelButtonColor: '#d33',
		cancelButtonText: 'Cancelar!',
		// confirmButtonClass: 'btn btn-success',
		// cancelButtonClass: 'btn btn-danger',
		// buttonsStyling: false
	  }).then(function () {
		borrarRegistro(id);
	  }, function (dismiss) {
		// dismiss can be 'cancel', 'overlay',
		// 'close', and 'timer'
		if (dismiss === 'cancel') {
		  swal(
			'Cancelado',
			'no borramos nada',
			'error'
		  )
		}
	  })
	
});

function borrarRegistro(id){
	// var id = $(this).data('id');
	// console.log(id);

	$.ajax({
		type: 'POST',
		url : 'php/servicios/post.eliminaralumno.php?id=' + id,
		dataType: 'json',
	})
	.done(function( data ){
		
		console.log("Correcto!");

		console.log( data ); // Se imprime en consola la api		
		$("#fila" + id).remove();
		swal(
			'Borrado!',
			'El registro ha sido eliminado correctamente',
			'success'
		  )
	});
}

})();