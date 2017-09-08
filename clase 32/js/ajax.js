// una petición ajax es un llamado asincrono hacía un servidor o un recurso externo y dicha petición retorna algo de información
// puede ser json, imagen, etc.

(function(){
    // inicia peticion ajax encadenando funciones
    $.ajax({
        type: "GET",
        //url: "json/registro.json",
        url:"http://www.json-generator.com/api/json/get/ceLdAXQkeq",
        dataType: "json",
    })
    .done(function(data){
        console.log("hecho correcto");
        var persona = data;

        // console.log(persona);
        $("#imgFoto").attr("src", persona.picture);
        $("#txtNombre").val(persona.name);
        $("#txtDireccion").val(persona.address);
        $("#txtTelefono").val(persona.phone);
        $("#txtGenero").val(persona.gender);
    })
    .fail(function(){
        console.log("fallo");
    })
    .always(function(){
        console.log("completo");
    });
    // termina funcion ajax








})();