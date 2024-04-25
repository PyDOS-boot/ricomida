$(function(){
    //esta funcíon despliega el alerta de correo enviado
    $('#enviarCorreo').click(function () {
		alert('El correo fue enviado correctamente...');
	});
    //esta función cambia el color del texto de los títulos 
    $('h5').on('dblclick',function(){
        $(this).css('color','red');
    });
    //esta función oculta el texto de las tarjetas
    $('.card-title').click(function () {
		$('.card-text').toggle(350);
	});
    
})
