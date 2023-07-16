$(document).ready(function(){

    $('#verde').click(function(){
        $('#caixa').removeClass("azul")
        $('#caixa').removeClass("vermelho")
        $('#caixa').addClass("verde")
    })
    $('#vermelho').click(function(){
        $('#caixa').removeClass("azul")
        $('#caixa').removeClass("verde")
        $('#caixa').addClass("vermelho")
    })
    $('#azul').click(function(){
        $('#caixa').removeClass("verde")
        $('#caixa').removeClass("vermelho")
        $('#caixa').addClass("azul")
    })

})
