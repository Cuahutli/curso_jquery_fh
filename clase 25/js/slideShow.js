(function(){

    $.slideShow = function( opciones ){

        opciones = $.extend({
            divDestino:".slideShow",
            intervalo: 1500,
            ancho :600,
            velocidad: 1200,
            slides:[],
            colorPuntoActivo: "#ba007c",
            colorPuntoInactivo: "#888",

        }, opciones);

        if (opciones.slides.length == 0){
            alert("Los slides son necesarios");
            return;
        }

        opciones.velocidad = opciones.velocidad / 1000;

        var actual = 0;
        var ancho = opciones.ancho;
    
        var slides = opciones.slides.length;
        
        //creacion del slideShow
        var contenido = "";
        contenido +="<ul>"
        for (var i=0; i< opciones.slides.length; i++){
            contenido +=  "<li><img src='" + opciones.slides[i] + "'></li>";
        }
        contenido +="</ul>"

        $(opciones.divDestino).append(contenido);

        var $slideShow = $( opciones.divDestino + " ul");

        //creacion de los botones

        contenido = "";
        contenido += "<div class='slideShowButtons'>"
        for (var i=0; i< opciones.slides.length; i++){
            contenido += "<div data-idx='"+ i + "' class='slideButton'></div>";
        }
        contenido += "</div>";
        $(opciones.divDestino).append(contenido);

        var $puntos = $(".slideShowButtons");
    
        $puntos.find("div").not(0).css({
            backgroundColor: opciones.colorPuntoInactivo,
        });
        $puntos.find("div").eq(0).css({
            backgroundColor: opciones.colorPuntoActivo,
        });
    
        var intervalo = setInterval(function(){
            mover("sig");
        },opciones.intervalo)
        function mover ( dir, click){
            
            if(dir === "sig"){
                actual--;
                if(actual<= (slides * -1)){
                    actual = 0;
                }
            }else{
                actual++;
                if(actual>0){
                    actual = (slides -1) * -1;
                }
            }
    
            moverPorPunto(actual)
    
    
        }
    
        function moverPorPunto(actual, click){
            if (click){
                clearInterval(intervalo);
            }
    
            var margen = actual * ancho;
            var idx  = actual * -1;
            var $puntoActual = $puntos.find("div").eq(idx);
            var $demasPuntos = $puntos.find("div").not($puntoActual);
            
            var tl = new TimelineMax();
            tl.to($slideShow, opciones.velocidad, {
                marginLeft: margen,
                ease: Bounce.easeOut,
            }).to($puntoActual,0.5, {
                backgroundColor: opciones.colorPuntoActivo
            },"-=1.2"
            ).to($demasPuntos, 0.5,{
                backgroundColor: opciones.colorPuntoInactivo,
            }, "-=1.2")
    
        }
    
        $(".slideButton").on("click", function(){
            var idx = $(this).data("idx");
            idx = idx * -1
            moverPorPunto(idx, true);
        });
    
        $(".btnSlide").on("click", function(){
            var dir = $(this).data("mov");
            mover(dir, true);
        });
    }
    
})();