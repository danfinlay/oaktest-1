var q1 = $('#question1');
q1.submit(function (ev) {
    ev.preventDefault();
    console.log(q1.find('#input1').val());
});
