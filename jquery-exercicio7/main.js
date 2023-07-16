$('#aumentar').click(function(){
    $('#caixa').animate({width:"500px",height:"500px"},{duration:1000})

})

$('#diminuir').click(function(){
    $('#caixa').animate({width:"200px"},{duration:1000}).animate({height:"200px"},{duration:1000})

})
$('#direita').click(function(){
    $('#caixa').animate({left:"500px"},{duration:1000})

})
$('#esquerda').click(function(){
    $('#caixa').animate({left:"0px"},{duration:1000})

})


