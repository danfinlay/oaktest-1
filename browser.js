var q6= $('#question6');
q6.hide();
var q7 = $('#question7');
q7.hide();
var q1 = $('#question1');
q1.submit(function (ev) {
    ev.preventDefault();
<<<<<<< HEAD
    var theirAnswer = q1.find('#input1').val();
    console.log("Their answer:" + theirAnswer);
    var rightAnswer = eval($('#question1'));
    console.log("The right answer is: "+rightAnswer);
    if (theirAnswer === rightAnswer){
    	alert("That's right!");
    }else{
    	alert("Try again!");
    }
});

q6.submit(function (ev) {
    ev.preventDefault();
    console.log(q6.find('#input1').val());
q6.hide();
q7.show();
});

=======

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
var q2 = $('#question2');
q2.submit(function (ev) {
    ev.preventDefault();
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

>>>>>>> 859be1de571ac92a4b7a75cc7b5467c37d1bc5c9
q7.submit(function (ev) {
    ev.preventDefault();
    console.log(q7.find('#input1').val());
    q4.hide();
    q6.hide();
<<<<<<< HEAD
=======

>>>>>>> 859be1de571ac92a4b7a75cc7b5467c37d1bc5c9
});
