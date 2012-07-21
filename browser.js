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

// loop over the questions from 1 through 6, inclusive
for (var i = 1; i <= 6; i++) {
    question(i);
}
