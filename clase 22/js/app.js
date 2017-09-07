(function(){
    var actual = 0;
    var ancho = 600;

    var $slideShow = $(".slideShow ul");
    var slides = $slideShow.find("li").length;
    var tiempo = 1200;

    var intervalo = setInterval(function(){
        mover("sig");
    },tiempo)
    function mover ( dir, click){
        
        if (click){
            clearInterval(intervalo);
        }

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

        var margen = actual * ancho;

        var tl = new TimelineMax();
        tl.to($slideShow, tiempo/1000, {
            marginLeft: margen,
            ease: Bounce.easeOut,
        })

        // $slideShow.animate({
        //     marginLeft: margen
        // },tiempo)

    }

    $(".btnSlide").on("click", function(){
        var dir = $(this).data("mov");
        mover(dir, true);
    });
})();