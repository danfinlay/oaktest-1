function solveAbsolutes(questionText){
    console.log("Beginning to try to solve "+questionText);
    var answer="";
    var startAbs=false;

    for(var i = 0; i < questionText.length; i++){
        var letter = questionText[i];
        console.log("Letter: "+letter);
        if(letter!=="|"){
            console.log("This letter is not a pipe.");
            answer=answer+letter;
        }else{
            if(startAbs){
                console.log("Ending absolute.");
                answer=answer+")";
                startAbs=false;
            }else{
                console.log("Beginning absolute.");
                answer=answer+"Math.abs(";
                startAbs=true;
            }
        }
        console.log("Answer is currently: "+answer);
    }

    return eval(answer);
}

var questions = $('.question');

function createQuestion (n) {
    var qn = $(questions[n]);
    qn.hide();
    qn.submit(function (ev) {
        ev.preventDefault();
        var theirAnswer = parseInt(qn.find('.answer').val());
        console.log("Their answer:" + theirAnswer);
        console.log("Right answer text"+ qn.find('.q').text());
        var answerText = qn.find('.q').text();
        console.log("Running our algorithm on: "+answerText);
        var answer = solveAbsolutes(answerText);
        console.log("Right answer evaluated"+answer);
        var rightAnswer = answer;
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
