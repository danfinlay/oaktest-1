var q6= $('#question6');
q6.hide();
var q7 = $('#question7');
q7.hide();
var q4 = $('#question4');
q4.submit(function (ev) {
    ev.preventDefault();
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

q7.submit(function (ev) {
    ev.preventDefault();
    console.log(q7.find('#input1').val());
    q4.hide();
    q6.hide();
});
