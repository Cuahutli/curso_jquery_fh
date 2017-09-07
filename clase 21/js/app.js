(function(){
    
    function mover(dir){

        var $caja = $(".cajaRoja");
        $caja.clearQueue();

        var $cajaAzul = $(".cajaAzul");
        var tl = new TimelineMax();

        switch(dir){
            case "arriba":
            case 119:
                $caja.animate({
                    top: "-=50px"
                }, 450)
                tl.to($cajaAzul, 0.45, {y: "-=50" } )
                break;
            case "abajo":
            case  115:
                $caja.animate({
                    top: "+=50px"
                }, 450)
                tl.to($cajaAzul, 0.45, {y: "+=50" } )
                break;
            case "derecha":
            case 100:
                $caja.animate({
                    left: "+=50px"
                }, 450)
                tl.to($cajaAzul, 0.45, {x: "+=50" } )
                break;
            case "izquierda":
            case 97:
                $caja.animate({
                    left: "-=50px"
                }, 450)
                tl.to($cajaAzul, 0.45, {x: "-=50" } )
                break;
            case "reset":
            case 99:
                $caja.animate({
                    left: "0px",
                    top: "0px",
                    width: "50px",
                    height: "50px"
                }, 450)
                tl.to($cajaAzul, 0.45, {y: "0", x:"0", width: "50", height: "50", backgroundColor: "blue" } ).to($caja, 0.3, {backgroundColor: "red"});
                break;
        }
    }

    $("#botonAncho").on("click", function(){
        var $caja = $(".cajaRoja");
        $caja.clearQueue();

        var $cajaAzul = $(".cajaAzul");
        var tl = new TimelineMax();

        $caja.animate({
            width: "+=150",
            height: "+=150",
            backgroundColor: "blue"
        }, 500);
        tl.to($cajaAzul, 0.5, {
            width: "+=150",
            height: "+=150",
            backgroundColor: "red"
        }).to($caja, 0.3, {backgroundColor: "blue"});
    });

    $("button").on("click", function(){
        var dir = $(this).data("direccion");
        mover(dir);
    })

    $(document).on("keypress", function(e){
        var keyCode = e.keyCode;
        console.log(keyCode);
        mover(keyCode);
    });
})();