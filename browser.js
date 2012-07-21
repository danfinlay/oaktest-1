function createQuestion (n) {
    var qn = $('#question' + n);
    qn.hide();
    qn.submit(function (ev) {
        ev.preventDefault();
        var theirAnswer = parseInt(qn.find('#input' + n).val());
        console.log("Their answer:" + theirAnswer);
        var rightAnswer = eval($('#q' + n).text());
        console.log("The right answer is: "+rightAnswer);
        if (theirAnswer === rightAnswer){
            qn.hide();
            if (n === 6) {
                alert('All correct!');
            }
            else {
                $('#question' + (n + 1)).show();
            }
        }else{
            alert("Try again!");
        }
    });
}

// loop over the questions from 1 through 6, inclusive
for (var i = 1; i <= 6; i++) {
    createQuestion(i);
}

$('#question1').show();
