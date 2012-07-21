var q1 = $('#question1');
q1.submit(function (ev) {
    ev.preventDefault();
    var theirAnswer = parseInt(q1.find('#input1').val());
    console.log("Their answer:" + theirAnswer);
    var rightAnswer = eval($('#q1').text());
    console.log("The right answer is: "+rightAnswer);
    if (theirAnswer === rightAnswer){
    	alert("That's right!");
    }else{
    	alert("Try again!");
    }
});

var q2 = $('#question2');
q2.submit(function () {
    var theirAnswer = parseInt(q2.find('#input2').val());
    console.log("Their answer:" + theirAnswer);
    console.log($('#q2').text() )
    var rightAnswer = parseInt(eval($('#q2').text()));
    console.log("The right answer is: "+rightAnswer);
    if (theirAnswer === rightAnswer){
    	alert("That's right!");
    }else{
    	alert("Try again!");
    }
});

var q3 = $('#question3');
q3.submit(function (ev) {
    ev.preventDefault();
    var theirAnswer = parseInt(q3.find('#input3').val());
    console.log("Their answer:" + theirAnswer);
    console.log($('#q3').text() )
    var rightAnswer = parseInt(eval($('#q3').text()));
    console.log("The right answer is: "+rightAnswer);
    if (theirAnswer === rightAnswer){
        alert("That's right!");
    }else{
        alert("Try again!");
    }
});

var q4 = $('#question4');
q4.submit(function (ev) {
    ev.preventDefault();
    var theirAnswer = parseInt(q4.find('#input4').val());
    console.log("Their answer:" + theirAnswer);
    console.log($('#q4').text() )
    var rightAnswer = parseInt(eval($('#q4').text()));
    console.log("The right answer is: "+rightAnswer);
    if (theirAnswer === rightAnswer){
        alert("That's right!");
    }else{
        alert("Try again!");
    }
});
