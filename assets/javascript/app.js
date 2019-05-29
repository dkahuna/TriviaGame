// Setting up the countdown from sixty to zero
var timer = 60; 

var interval = setInterval(function() {
    document.getElementById('watch').innerHTML = --timer;

    if (timer <= 0)
    {
        document.getElementById('watch').innerHTML = 'TIME is UP!!!!!!';
        clearInterval(interval);
    }
}, 1000);

function submitAnswers () {
    var total = 5;
    var score = 0;

    // Get User Input
    var q1 =
}







