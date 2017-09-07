(function(){
$.bigBox = function(opciones, callback){
    opciones = $.extend({ 
        fa:'fa-thumbs-o-up',
        titulo: undefined,
        contenido: undefined,
        boton: "Aceptar"
    },opciones);

    if (opciones.titulo === undefined){
        alert("El titulo es necesario")
        return;
    }

    if (opciones.contenido === undefined){
        alert("El contenido es necesario")
        return;
    }
     
    var contenido = "";

    contenido += '<div class="bigBox-fondo"></div>';
    contenido += '<div class="bigBox-contenedor" align="center">';
	contenido += '<div class="bigBox-cerrar"><i class="fa fa-times"></i></div>';
	contenido += '<div class="bigBox-circulo"><i class="fa ' + opciones.fa +' fa-3x"></i></div>';
	contenido += '<div class="bigBox-contenido">';
	contenido += '	<span class="bigBox-titulo">'+ opciones.titulo +'</span>';
	contenido += '	<span class="bigBox-texto">'+ opciones.contenido +'</span>';
	contenido += '</div>';
	contenido += '<button class="bigBox-boton">'+ opciones.boton +'</button>';
    contenido += '</div>';
    $("body").append( contenido);
    
    animarEntrada();

    // funciones del boton cerrar
    $(".bigBox-cerrar").on("click", function(){
        animarSalida();
        if (typeof callback === 'function'){
            callback('boton-cerrar');
        }
    });

    $(".bigBox-boton").on("click", function(){
        animarSalida();

        if (typeof callback === 'function'){
            callback('boton-principal');
        }
    });

    // funcion para animar entrada
    function animarEntrada(){
        var $bbFondo = $(".bigBox-fondo");
        var $bb = $(".bigBox-contenedor");

        var anchoP = $(window).width();
        var altoP = $(window).height();

        var anchoBB = $bb.width();
        var altoBB = $bb.height();

        $bb.css({
            top: (altoP/2)- (altoBB /2),
            left: (anchoP/2) - (anchoBB /2),
        })
        // $bbFondo.fadeIn(300);
        $bbFondo.show();
        $bb.show();

        var tl = new TimelineMax();
        tl.to($bbFondo, 0.5, { opacity: 0.3 })
          .to($bb, 0.5, { opacity: 1 }, "-=0.5")
          .from($bb, 0.8, {y:"-=30px", ease: Bounce.easeOut }, "-=0.5");

    }

    function animarSalida(){
        var $bbFondo = $(".bigBox-fondo");
        var $bb = $(".bigBox-contenedor");

        var tl = new TimelineMax();
        tl.to($bbFondo, 0.3, { opacity: 0 })
          .to($bb, 0.3, { opacity: 0, onComplete: removerBigBox }, "-=0.5");
        
    }

    function removerBigBox(){
        var $bbFondo = $(".bigBox-fondo");
        var $bb = $(".bigBox-contenedor");

        $bbFondo.remove();
        $bb.remove();
    }

};

})();