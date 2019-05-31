// Setting up the countdown from sixty to zero
//var timer = 60; 
//var interval = setInterval(function() {
  //  document.getElementById('watch').innerHTML = --timer;
//if (timer <= 0)
  //  {
    //    document.getElementById('watch').innerHTML = 'TIME is UP!!!!!!';
      //  clearInterval(interval);
  //  }
//}, 1000);

$(document).ready(function(){



var total_seconds = 60*1;
var c_minutes = parseInt(total_seconds/60);
var c_seconds = parseInt(total_seconds%60);

function CheckTime () {
    document.getElementById("quiz-time-left").innerHTML = "Time Left: " + c_minutes + "minutes " + c_seconds + "seconds";
        if (total_seconds <=0) {
           submitAnswers()
        }   else {
            total_seconds = total_seconds - 1;
            c_minutes = parseInt(total_seconds/60);
            c_seconds = parseInt(total_seconds%60);
            setTimeout (CheckTime , 1000);
        }
       
       // console.log (CheckTime)
}

$(".answers").on("click", function(event){
    event.preventDefault();
    submitAnswers()
})

function submitAnswers() {
    var total = 5;
    var score = 0;

    // Get User Input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    // Validation
    for (i =1; i <= total; i++){
        if (eval ("q"+ i) == null || eval("q" + i) == "") {
            alert ("You missed question " + i);
            return false;
        }
    }
    
//Setting Correct Answers

var answers = ["d", "c", "d", "c", "a"];

//Check Answers
for (i =1; i <= total; i++){
    if (eval ("q" + i) == answers[i - 1]){
        score++;
    }
}

//Display Results
var results = document.getElementById("results");
    results.innerHTML = "<h1> You scored <span>"+ score + "</span> out of " + total + "</span></h1>";
alert("You scored  " + score + " out of  " + total);


}
CheckTime()
});