var cardScreen = $("#quizArea");

var overallTime = 60;
var timer; 

var triviaGame = {

    correct: 0,
    incorrect: 0,
    currentQuestion: 0,
    timeLeft: overallTime,
    
    clockCountDown: function() {
        triviaGame.timeLeft--;
        $("#count-number").text(triviaGame.timeLeft);

        if(triviaGame.timeLeft === 0) {
            triviaGame.timeOutEndGame();
        }

    },

    showQuestions: function() {
        
        timer = setInterval(triviaGame.clockCountDown, 1000);

    cardScreen.html("<h2>" + questions[this.currentQuestion].question + "</h2>")
    for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
            cardScreen.append("<button class='answer-button' data-name='"+ questions[this.currentQuestion].answers[i] +"'>" + questions[this.currentQuestion].answers[i] + "</button>")
        }
    },

    timeOutEndGame: function() {
        clearInterval(timer);
        triviaGame.showFinalScore();
    },

    answerMessage: function(event) {
    clearInterval(timer);
    if ($(event.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
        triviaGame.correctAnswer();
    } else {
        triviaGame.wrongAnswer();
    }

    },

    correctAnswer: function() {
        triviaGame.correct++; 
        console.log("this is right");
        cardScreen.html("<h2>correct!!!!</h2>");

        if(triviaGame.currentQuestion === questions.length - 1){
            setTimeout(triviaGame.showFinalScore, 3 * 1000);
        } else {
            setTimeout(triviaGame.nextQuestion, 3 * 1000);
        }
    },

    wrongAnswer: function() {
        triviaGame.incorrect++;
        console.log("This is Wrong");
        cardScreen.html("<h2>Wrong!!!!</h2>");
        
        if(triviaGame.currentQuestion === questions.length - 1){
            setTimeout(triviaGame.showFinalScore, 3 * 1000);
        } else {
            setTimeout(triviaGame.nextQuestion, 3 * 1000);
        }
    },

    nextQuestion: function() {
        triviaGame.currentQuestion++;
        triviaGame.showQuestions();
    },

    showFinalScore: function() {
        clearInterval(timer);
        cardScreen.html("<h2>" + "correct:" + triviaGame.correct + "</h2>");
        cardScreen.append("<h2>" + "incorrect:" + triviaGame.incorrect + "</h2>")
        cardScreen.append("<button class='restart'> start over </button>");
    },

    showList: function() {
        
    }

}

$(document).on("click", "#start", function() {
    $('.time-wrapper').prepend("<h2>Time Remaining: <span id='count-number'>60</span></h2>");
    triviaGame.showQuestions();
  });

  $(document).on("click", ".answer-button", function(event) {
    triviaGame.answerMessage(event);
  });

  $(document).on("click", ".restart", function() {
      triviaGame.currentQuestion = 0;
      triviaGame.correct = 0;
      triviaGame.incorrect = 0;
      triviaGame.showQuestions();
      triviaGame.timeLeft = 60;
  });



var questions = [{
    question: "Inside which HTML element do we put the Javascript?",
    answers: ["Javascript", "script", "scripting", "js"],
    correctAnswer: "script",
    image: ""
},{
    question: "How do you call a function named 'myFunction'?",
    answers: ["call myFunction()", "call function myFunction()", "myFunction()"],
    correctAnswer: "myFunction()",
    image: "",
},{
    question: "How do you write an IF statement in Javascript?",
    answers: ["if (i == 5)", "if i = 5 then", "if i = 5", "if i == 5 then"],
    correctAnswer: "if (i == 5)",
    image: "",
},{
    question: "How do you round the number 6.25, to the nearest integer?",
    answers: ["Math.rnd(6.25)", "rnd(6.25)", "round(6.25)", "Math.round(6.25)"],
    correctAnswer: "Math.round(6.25)",
    image: "",
},{
    question: "How do you find the number with the highest value of x and y?",
    answers: ["Math.max(x,y)", "top(x,y)", "ceil(x,y)", "Math.ceil(x,y)"],
    correctAnswer: "Math.max(x,y)",
    image: "",
},{
    question: "What is the correct JavaScript syntax to open a new window called 'windowTwo'?",
    answers: ["windowTwo = window.open(\"http://www.google.com\");", "windowTwo = window.new(\"http://www.google.com\");"],
    correctAnswer: "windowTwo = window.open(\"http://www.google.com\");",
    image: "",
},

];

