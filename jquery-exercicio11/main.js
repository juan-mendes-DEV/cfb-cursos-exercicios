$(document).ready(function(){

    $('#cima').click(function(){
        $('#menus').slideUp(1000,function(){
            $('#msg').text('menu oculto')
        });
    })
    $('#baixo').click(function(){
        $('#menus').slideDown(1000,function(){
            $('#msg').text('menu exibido')
        });
    })

})
