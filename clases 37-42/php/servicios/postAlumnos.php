<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$nombre = $_POST["txtNombre"];
$estado = $_POST["cmbEstado"];


$sql = "insert into alumnos(nombre) values('$nombre')";
$hecho = Database::ejecutar_idu($sql);
if ($hecho){
	$respuesta = json_encode( 
	
				array('err' => false, 
					  'mensaje' => "creado correctamente"
					  )
			);
}else{
	$respuesta = json_encode( 
		
					array('err' => false, 
						  'mensaje' => $hecho
						  )
				);
}


echo $respuesta;



?>