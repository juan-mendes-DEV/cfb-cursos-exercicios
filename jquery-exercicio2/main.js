let r,g,b
let num=0

$('#adicionarAntes').click(()=>{
    r=Math.floor(Math.random()*255)
    g=Math.floor(Math.random()*255)
    b=Math.floor(Math.random()*255)

    $('#caixa').before("<div class='subcaixa' style='background-color:rgb("+r+","+g+","+b+")'>"+num+"</div>");

    num++
})
$('#adicionarDepois').click(()=>{
    r=Math.floor(Math.random()*255)
    g=Math.floor(Math.random()*255)
    b=Math.floor(Math.random()*255)

    $('#caixa').after("<div class='subcaixa' style='background-color:rgb("+r+","+g+","+b+")'>"+num+"</div>");
    num++
})
$('#adicionarTextoAntes').click(()=>{
    
    $('#caixa2').before("curso de jquery-"); 

})
$('#adicionarTextoDepois').click(()=>{
    
    $('#caixa2').after("curso de jquery- ");

})
