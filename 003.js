var questions = $('.question');

function createQuestion (n) {
    var qn = $(questions[n]);
    qn.hide();
    qn.submit(function (ev) {
        ev.preventDefault();
        console.log("Testing for whole number working...");
        var theirAnswer = eval(qn.find('.answer').val());
        console.log("Their answer:" + theirAnswer);
        var qNumerator = parseInt(qn.find('.q>sup').text());
        var qDenominator = parseInt(qn.find('.q>sub').text());
        var wholeNumber = parseInt(qn.find('.q>.wholeNumber').text());
        if (wholeNumber > 0){
            qNumerator += wholeNumber * qDenominator;
        }
        console.log("Numerator: "+qNumerator+" and Denominator: "+qDenominator);
        var rightAnswer = qDenominator/qNumerator;
        console.log("The right answer is: "+rightAnswer);
        if (theirAnswer === rightAnswer){
            qn.hide();
            if (n === questions.length - 1) {
                alert('All correct!');
                window.location.href = "004.html";
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
