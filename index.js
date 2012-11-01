$('.bigList>li').click(function(event){
    console.log("The attr is "+ $(this).next().css("display"));
    if ($(this).next().css("display")==="none"){
        $(this).next().show();
    }else{
        $(this).next().hide();
    }
});

//Below this line are the functions that make the login box work:
$('.login').click(function(event){
	console.log("Login clicked.");
	event.preventDefault();
	$('#loginPopUp').show(300);
})

$('.cancel').click(function(event){
	event.preventDefault();
	console.log("Cancel Clicked.");
	$('.popUp').hide(300);
})

$('.signup').click(function(event){
	console.log("signup.");
	event.preventDefault();
	$('#signupPopUp').show(300);
})