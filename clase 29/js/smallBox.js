(function(){
$.smallBox = function(opciones){
    opciones = $.extend({
        titulo: undefined,
        subtitulo: undefined,
        contenido: undefined,
        fa: "fa-envelope-o",
        img: undefined,
        timeout: 3000

    }, opciones);

    var html = "";

    html += '<div class="smallBox-contenedor">'
    html += '    <div class="smallBox-foto">'
    html += '        <img src="'+ opciones.img +'" alt="">'
    html += '    </div>'
    html += '    <div class="smallBox-contenido" align="center">'
    html += '        <div class="smallBox-textoContenedor" align="left">'
    html += '            <span class="smallBox-titulo">'+ opciones.titulo +'</span>'
    html += '            <span class="smallBox-subTitulo">'+ opciones.subtitulo +'</span>'
    html += '        </div>'
    html += '        <div class="smallBox-pico"></div>'
    html += '        <div class="smallBox-cajaColor">'
    html += '            <div class="smallBox-colorTexto">'+ opciones.contenido +'</div>'
    html += '            <div class="smallBox-colorIcon"><i class="fa '+ opciones.fa +' fa-2x"></i></div>'
    html += '        </div>'
    html += '        <div class="smallBox-sombra"></div>'
    html += '    </div>'
    html += '</div>'

    $("body").append(html);
    animarEntrada();
    setTimeout(function(){
        animarSalida();
    }, opciones.timeout);

};

function animarEntrada(){
    var $smallBox = $(".smallBox-contenedor");

    var tl = new TimelineMax();
    tl.from($smallBox, 1.6, {x:"+=150px", ease: Bounce.easeOut })
      .from($smallBox, 1, {opacity: 0}, "-=1.3");
};

function animarSalida(){
    var $smallBox = $(".smallBox-contenedor");

    var tl = new TimelineMax();
    tl.to($smallBox, 1.3, {x:"+=150px"})
      .to($smallBox, 1, {opacity: 0, onComplete: removerSmallBox}, "-=1");
};

function removerSmallBox(){
    $(".smallBox-contenedor").remove();
}

})();