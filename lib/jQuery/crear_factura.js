/*
AUTOR: ELISEO ÁVILA
VERSIÓN ACTUAL: 1.01
OBJETIVO DEL ARCHIVO: código javaScript y/o jQuery para manipulación del DOM
*/
$(document).ready(function () {
    $('#formulario').validate({
        rules: {
            id_factura: {
                required: true,
                range: [1, 9999]
            },
            id_venta: {
                required: true,
                range: [1, 999]
            },
            fecha_generacion: {
                required: true,
            },
            fecha_pago: {
                required: true,
            },
            subtotal: {
                required: true,
            },
            impuesto: {
                required: true,
            },
            total: {
                required: true,
            }
        }
    });

    $( "#fecha-generacion" ).datepicker({
        dateFormat: 'dd-mm-yy'
    });
    $( "#fecha-pago" ).datepicker({
        dateFormat: 'dd-mm-yy'
    });
    
});