/*
AUTOR: ELISEO ÁVILA
VERSIÓN ACTUAL: 1.01
OBJETIVO DEL ARCHIVO: código javaScript y/o jQuery para manipulación del DOM
*/
$(document).ready(function () {
    $('.secciones-sec',this).click(function () { 
        $(this).css('display', 'none');
    });
    $('#btn-secciones').click(function () { 
        $('.secciones-sec').css('display', 'flex')
    });
    $( "#menu" ).menu();
});