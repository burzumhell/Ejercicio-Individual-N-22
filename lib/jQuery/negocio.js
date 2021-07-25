$(document).ready(function () {
    $('.secciones-sec',this).click(function () { 
        $(this).css('display', 'none');
    });
    $('#btn-secciones').click(function () { 
        $('.secciones-sec').css('display', 'flex')
    });
    $( "#menu" ).menu();
});