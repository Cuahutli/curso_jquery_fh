(function(){
    var $caja = $(".cajaRoja");
    function mover(dir){
        $caja.clearQueue();

        switch(dir){
            case "arriba",119:
                $caja.animate({
                    top: "-=50px"
                })
                break;
            case "abajo", 115:
                $caja.animate({
                    top: "+=50px"
                })
                break;
            case "izquierda", 100:
                $caja.animate({
                    left: "+=50px"
                })
                break;
            case "derecha", 97:
                $caja.animate({
                    left: "-=50px"
                })
                break;
            case "reset",99:
                $caja.animate({
                    left: "0px",
                    top: "0px"
                })
                break;
        }
    }
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