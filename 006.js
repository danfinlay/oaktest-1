var questions = $('.question');

//Remove spaces from their answer before evaluating it!

function createQuestion (n) {
    var qn = $(questions[n]);
    qn.hide();
    qn.submit(function (ev) {
        ev.preventDefault();
        var theirAnswer = qn.find('.answer').val();
        var withoutSpaces = '';
        var hasCarrot = false;
        for (letters in theirAnswer){
            if (letters !== " "){
                withoutSpaces += letters;
            }
            if (letters === "^"){
                hasCarrot = true;
            }
        }
        if (hasCarrot === false){
            alert("To make an exponent,  you need to use the carrot symbol (^).  For example, two squared is 2^2.")
        }
        console.log("Their answer:" + theirAnswer);
        var rightAnswer = qn.find('.a').text();
        console.log("The right answer is: "+rightAnswer);
        if (theirAnswer === rightAnswer){
            qn.hide();
            if (n === questions.length - 1) {
                alert('All correct!');
            }
            else {
                $(questions[n+1]).show();
            }
        }else{
            var tips = ["tip one", "tip two"];
            alert("Try again!");
        }
    });
}

// loop over the questions from 0 through n, inclusive
for (var i = 0; i < questions.length; i++) {
    createQuestion(i);
}

$(questions[0]).show();
