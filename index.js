//check off specific TODOs By clicking
$("ul").on("click",'li',function(){
    $(this).toggleClass("completed")
})

// click X to delete todo
$("ul").on("click","span",function(e){
    $(this).parent().fadeOut().remove(500,function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        var todotext = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todotext + "</li>")
    }
})
$(".fa-plus-circle").click(function(){
    $("input[type='text']").fadeToggle();
})