let r,g,b
let num=0

$('#adicionar').click(()=>{

    r=Math.floor(Math.random()*255)
    g=Math.floor(Math.random()*255)
    b=Math.floor(Math.random()*255)
    
    $('#caixa').prepend("<div class='subcaixa' style='background-color:rgb("+r+","+g+","+b+")'>"+num+"</div>") 
    num++
})
$('#adicionar5').click(()=>{
    for(i=0;i<5;i++){
    let r,g,b

    r=Math.floor(Math.random()*255)
    g=Math.floor(Math.random()*255)
    b=Math.floor(Math.random()*255)

    $('#caixa').prepend("<div class='subcaixa' style='background-color:rgb("+r+","+g+","+b+")'>"+num+"</div>");num++ }
})
