var q1 = $('#question1');
q1.submit(function (ev) {
    ev.preventDefault();
    var theirAnswer = parseInt(q1.find('#input1').val());
    console.log("Their answer:" + theirAnswer);
    console.log($('#q1').text() )
    var rightAnswer = parseInt(eval($('#q1').text()));
    console.log("The right answer is: "+rightAnswer);
    if (theirAnswer === rightAnswer){
    	alert("That's right!");
    }else{
    	alert("Try again!");
    }
});
