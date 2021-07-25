/*
AUTOR: ELISEO ÁVILA
VERSIÓN ACTUAL: 1.01
OBJETIVO DEL ARCHIVO: código javaScript y/o jQuery para manipulación del DOM
*/
$(document).ready(function () {
    let idProducto = $('#id-producto');
    let nombreProducto = $('#nombre-producto');
    let valorProducto = $('#valor-producto');
    let btnCrearProducto = $('#crear-producto');
    
    btnCrearProducto.click(function (e) {
        e.preventDefault();

        if (idProducto.val() == '') {
            alert('Ingresa un ID de producto');
            $('#id-producto').addClass('input-error');
        } else if (idProducto.val() < 1 || idProducto.val() > 9999 ) {
            alert('Ingresa un número entre 1 y 9999');
        } else if (nombreProducto.val().trim() == '' ) {
            alert('Ingresa un nombre de producto');
            $('#nombre-producto').addClass('input-error');
        } else if (nombreProducto.val().length > 50) {
            alert('Ingresa un nombre máximo 50 caracteres');
        } else if (valorProducto.val() == '') {
            alert('Ingresa un valor de producto');
            $('#valor-producto').addClass('input-error');
        } else if (valorProducto.val() < 1 || valorProducto.val() > 999999) {
            alert('Ingresa un valor de 1 a 999999');
        } else {
            alert('El producto ha sido creado');
            window.location = 'crear_producto.html'
        }
    });

});