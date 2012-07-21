function question (n) {
    var qn = $('#question' + n);
    qn.submit(function (ev) {
        ev.preventDefault();
        var theirAnswer = parseInt(qn.find('#input' + n).val());
        console.log("Their answer:" + theirAnswer);
        var rightAnswer = eval($('#q' + n).text());
        console.log("The right answer is: "+rightAnswer);
        if (theirAnswer === rightAnswer){
            alert("That's right!");
        }else{
            alert("Try again!");
        }
    });
}

question(1);
question(2);
question(3);
question(4);
question(5);
question(6);
