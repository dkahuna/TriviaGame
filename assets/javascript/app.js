//setTimeout(fiveSeconds, 1000 * 5);
//console.log (setTimeout)


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

// QUESTIONS

var exam = [
{
    question: "What is you skin type?",
    answers: {
        a: 'dry',
        b: 'oily',
        c: 'normal',
        d: 'combination'
    },
    
}
]






//function countDown () {
  //  document.getElementById("watch").innerHTML = timer;
//}