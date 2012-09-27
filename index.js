$('.bigList>li').click(function(event){
    console.log("The attr is "+ $(this).next().css("display"));
    if ($(this).next().css("display")==="none"){
        $(this).next().show();
    }else{
        $(this).next().hide();
    }
});