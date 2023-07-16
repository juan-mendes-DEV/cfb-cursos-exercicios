$(document).ready(function(){

    $('.itemMenu').mouseover(function(){
        $(this).fadeTo(1000,0.5)
    })
    $('.itemMenu').mouseleave(function(){
        $(this).fadeTo(200,1)
    })

})
