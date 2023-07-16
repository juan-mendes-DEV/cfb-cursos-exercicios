let r,g,b
let num=1

$('#adicionar').click(()=>{
    r=Math.floor(Math.random()*255)
    g=Math.floor(Math.random()*255)
    b=Math.floor(Math.random()*255)

    $('#caixa').append("<div id='d"+num+"' class='subcaixa' style='background-color:rgb("+r+","+g+","+b+")'>"+num+"</div>")
    num++
})
$('#remover').click(()=>{
    $("#d"+(num-1)).remove()
    num--
})
$('#removerconteudo').click(()=>{
    $("#caixa").empty()
    num--
})
