(function(){
    var actual = 0;
    var ancho = 600;

    var $slideShow = $(".slideShow ul");
    var slides = $slideShow.find("li").length;
    var tiempo = 1200;
    var $puntos = $(".slideShowButtons");

    $puntos.find("div").eq(0).css({
        backgroundColor: "#58167d",
    });

    var intervalo = setInterval(function(){
        mover("sig");
    },tiempo)
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
        tl.to($slideShow, tiempo/1000, {
            marginLeft: margen,
            ease: Bounce.easeOut,
        }).to($puntoActual,0.5, {
            backgroundColor:"#58167d"
        },"-=1.2"
        ).to($demasPuntos, 0.5,{
            backgroundColor: "#a1a1a1"
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
})();