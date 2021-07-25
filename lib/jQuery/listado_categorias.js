/*
AUTOR: ELISEO ÁVILA
VERSIÓN ACTUAL: 1.01
OBJETIVO DEL ARCHIVO: código javaScript y/o jQuery para manipulación del DOM
*/
$(document).ready(function () {
    $('#titulo').mouseenter(function () {
        $(this).css({
            'transform':'scale(1.6)',
            'transition':'all 0.2s ease-in-out'
        })
    })
    $('#titulo').mouseleave(function () { 
        $(this).css({
            'transform':'scale(1)',
            'transition':'all 0.5s ease-in-out'
        })
    });
    $( "#acordeon" ).accordion();
    $( "#dialog" ).dialog({
        width: 'auto',
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 500
        },
        hide: {
          effect: "explode",
          duration: 500
        }
      });
   
      $( "#btn-dialog" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
      });
      
});


