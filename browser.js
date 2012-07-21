var $ = require('jquery-browserify');

var q1 = $('#question1');
q1.submit(function (ev) {
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
