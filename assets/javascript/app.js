//setTimeout(fiveSeconds, 1000 * 5);
//console.log (setTimeout)

/*var counter = 0;


function setup(){
    var timer = select('#watch');
    timer.html(counter);

    function timeIt() {
        counter++;
        timer.html(counter);
    }
    setInterval(timeIt, 1000);
}
*/


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
    correctAnswer: "d"
},
{   
    question: "If today is Monday. What is the day after tomorrow?",
    answers: {
        a: 'tuesday',
        b: 'friday',
        c: 'saturday',
        d: 'monday'
    },
   

}];
console.log (exam)


//function showExam (exam, "trivia")





//function countDown () {
  //  document.getElementById("watch").innerHTML = timer;
//}