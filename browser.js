var q6= $('#question6');
q6.hide();
var q7 = $('#question7');
q7.hide();
var q4 = $('#question4');
q4.submit(function (ev) {
    ev.preventDefault();
    console.log(q4.find('#input1').val());
    q4.hide();
    q6.show();
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
