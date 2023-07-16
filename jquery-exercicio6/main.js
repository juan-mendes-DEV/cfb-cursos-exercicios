$('#menu').click(function(){
    $('#caixa').toggle()
    
    if($('#caixa').is(':visible')){
        $('#menu').text('ocultar')
    }else{
        $('#menu').text('mostrar')
    }
})
