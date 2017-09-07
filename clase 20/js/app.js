(function(){
    var $cajaRoja = $('.cajaRoja');

    $("#btnTamanio").on("click", function(){
        $cajaRoja.animate({
            width: "+=10px",
            height: "+=10px",
        }, 500, function(){
            console.log("Terminó la animación del tamaño");
            $(this).animate({
                top:"-=10px"
            })
        });
    });
})();