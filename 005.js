var questions = $('.question');

function createQuestion (n) {
    var qn = $(questions[n]);
    qn.hide();
    qn.submit(function (ev) {
        ev.preventDefault();
        var theirAnswer = parseInt(qn.find('.answer').val());
        console.log("Their answer:" + theirAnswer);
        console.log("Right answer text"+ qn.find('.q').text());
        var answerText = eval(qn.find('.q').text());
        console.log("Right answer evaluated"+eval(qn.find('.q').text()));
        console.log("Absdolute value of it is: "+Math.abs(answerText));
        var rightAnswer = Math.abs(answerText);
        console.log("The right answer is: "+rightAnswer);
        if (theirAnswer === rightAnswer){
            qn.hide();
            if (n === questions.length - 1) {
                alert('All correct!');
                window.location.href="006.html";
            }
            else {
                $(questions[n+1]).show();
            }
        }else{
            alert("Try again!");
        }
    });
}

// loop over the questions from 0 through n, inclusive
for (var i = 0; i < questions.length; i++) {
    createQuestion(i);
}

$(questions[0]).show();
