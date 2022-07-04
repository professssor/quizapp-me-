var readlineSync = require("readline-sync");
// to keep track of the score
var scoreCounter = 0;

// object which provides detail of high score
var highScores = [
  {
    name: "Obviously Me",
    score: 3,
  },

  {
    name: "arun",
    score: 2,
  },
];

// list of questions to ask
var questions = [
  {
    question: "where was i born? ",
    answer: "delhi",
  },
  {
    question: " whats my fav bollywood movie ??",
    answer: "dhamaal",
  },
  {
    question: "  whats my go to drink  ?? ",
    answer: "beer",
  },
];

// ********FUNCTIONS*********

function intro() {
  var username = readlineSync.question("what is your name ");
  console.log("Welcome " + username.toUpperCase());
  console.log("Do you know me enough,  so called friend ??");
  // will show the questions if only s key is pressed
  let specialKey = readlineSync.question("Press S key to start  ");
  if (specialKey === "s") {
    game();
  } else {
    return null;
  }
}

// QNA
function sawalJawab(question, answer) {
  var userAns = readlineSync.question(question);
  if (userAns === answer) {
    console.log("🤜🤜absolutely right ");
    scoreCounter = scoreCounter + 1;
  } else {
    console.log("👎👎you are wrong");
  }
  console.log("your score is ", scoreCounter);
}

// will loop through the questions array and pass them to the functoin sawalJawab as arguments
function game() {
  for (i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    sawalJawab(currentQuestion.question, currentQuestion.answer);
  }
}

// will will different remarks based on your show and will also show the high score counter
function showScores() {
  if (scoreCounter === 0 || scoreCounter === 1) {
    console.log("how dare you call yourself my  friend ");
    console.log("HERE ARE THE HIGH SCORES,DO TRY TO BEAT THEM");
  } else if (scoreCounter === 2) {
    console.log("we can chill together sometime");
    console.log("HERE ARE THE HIGH SCORES,DO TRY TO BEAT THEM");
  } else if (scoreCounter === 3) {
    console.log("Respect!! my brother from another mother✌️✌️");
    console.log("HERE ARE THE HIGH SCORERS ,DO TRY TO BEAT THEM");
  }

  highScores.map((score) => console.log(score.name, ":", score.score));
}

// function invocation
intro();
showScores();
