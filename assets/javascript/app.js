//make object with all the question and answers.
// first answer is always the right answer
//load question and answer. Put answers in array and shuffle.
// when first loading question, creat var that stores first answer.
// click answer compare  against correct answer.

$(document).ready(function() {
  console.log("ready!");

  quCount = 0;

  function timeExpired() {
    quCount++;
    if (quCount == 10) {
      IstimerRun = false;
      return;
    }
    timeLeft = 15;
    setTimeout(function() {
      runQuiz(questionArr[quCount]);
    }, 4000);

    IstimerRun = true;
   
    /* setTimeout(timerExpired, 15000);*/
  }
  
  var intervalId;
  var converted ;
  var correctAns = 0;
  var wrongAns = 0;
  var timeLeft = 0;
  var IstimerRun = false;
  $("#quizQuestion").on("mouseenter", () => {
    $(".nav-menu").show(500);
  });
  /* 
  $(".nav-menu").on("mouseleave", () => {
    $(".nav-menu").hide(500);
  });
 */

  quizObj = {
    question1: {
      q1: "The name of mafia series crime boss on HBO",
      a1: "Tony Soprano",
      a2: "Anthony Scaramucci",
      a3: "Joey Fantone",
      a4: "Anthony Carlito"
    },

    question2: {
      q1: "Which country has a maple leaf on its flag?",
      a1: "Canada",
      a2: "Mexico",
      a3: "Peru",
      a4: "Ireland"
    },

    question3: {
      q1: "The chemical element a diamond is made of?",
      a1: "carbon",
      a2: "calcium ",
      a3: "iron",
      a4: "phosphorus"
    },

    question4: {
      q1: "The European language first spoken in America",
      a1: "Spanish",
      a2: "English ",
      a3: "French",
      a4: "Italian"
    },

    question5: {
      q1: "The name of poker hand with 3 of kind and pair?",
      a1: "full house",
      a2: "royal flush ",
      a3: "straight",
      a4: "flush"
    },

    question6: {
      q1: "The actor who voiced Shrek?",
      a1: "Mike Myers",
      a2: "Eddie Murphy",
      a3: "John Lithgow",
      a4: "Chris Miller"
    },

    question7: {
      q1: "The official language of Brazil?",
      a1: "Portuguese",
      a2: "Spanish ",
      a3: "Italian",
      a4: "French"
    },

    question8: {
      q1: "The postal Worker on Seinfeld",
      a1: "Newman",
      a2: "Peterman",
      a3: "Sherman",
      a4: "Wilson"
    },

    question9: {
      q1: "The 80s movie was Alan Rickman's first feature role?",
      a1: "Die Hard",
      a2: "Quigley Down Under",
      a3: "January Man",
      a4: "Robin Hood: Prince of Thieves"
    },

    question10: {
      q1: "The only U.S. state that only border one other",
      a1: "Maine",
      a2: "Washington",
      a3: "Florida",
      a4: "Michigan"
    }
  };

  function shuffle() {
    var base = ["a1", "a2", "a3", "a4"];
    var i = 0,
      j = 0,
      temp = null;
    for (i = base.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = base[i];
      base[i] = base[j];
      base[j] = temp;
    }
    return base;
  }
  var solvedAns;
  var questionArr = [
    "question1",
    "question2",
    "question3",
    "question4",
    "question5",
    "question6",
    "question7",
    "question8",
    "question9",
    "question10"
  ];

  function runQuiz(quest) {
    solvedAns = quizObj[quest].a1;
    var qShuffleArr = shuffle();
    $("#quizQuestion").text(quizObj[quest].q1);

    /* console.log(solvedAns);
    console.log(qShuffleArr[0]);
    console.log(quizObj.question1[qShuffleArr[0]]); */

    $("#a1").text(quizObj[quest][qShuffleArr[0]]);
    $("#a2").text(quizObj[quest][qShuffleArr[1]]);
    $("#a3").text(quizObj[quest][qShuffleArr[2]]);
    $("#a4").text(quizObj[quest][qShuffleArr[3]]);

    IstimerRun =true;
    clearInterval(intervalId);
    intervalId= setInterval(count,1000);
   
   
    $("#TimeLeft").text(converted);
  }
  /* 
  $("#Start").on("click", () => {
    solvedAns = quizObj.question1.a1;
    var qShuffleArr = shuffle();
    $("#quizQuestion").text(quizObj.question1.q1);

    /* console.log(solvedAns);
    console.log(qShuffleArr[0]);
    console.log(quizObj.question1[qShuffleArr[0]]); */

  /*   $("#a1").text(quizObj.question1[qShuffleArr[0]]);
    $("#a2").text(quizObj.question1[qShuffleArr[1]]);
    $("#a3").text(quizObj.question1[qShuffleArr[2]]);
    $("#a4").text(quizObj.question1[qShuffleArr[3]]);
  }); */

  $("#Start").on("click", () => {
    timeLeft = 15;
    $("#TimeLeft").text(timeLeft);
    runQuiz(questionArr[quCount]);

    if (!IstimerRun) {
       IstimerRun = true;
      intervalId = setInterval(count, 1000);
    }
  });

  function count() {
     console.log("timer " + IstimerRun);
    if (IstimerRun === false ) {
      return;
    }
    
    
   
     converted = timeConverter(timeLeft);
    console.log(converted);
    if (timeLeft === 0) {
      IstimerRun = false;
      timeExpired();
      $("#TimeLeft").text(converted);
    }
    timeLeft--;
    $("#TimeLeft").text(converted);
  }

  function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - minutes * 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }

  $(".pick").on("click", () => {
    var myobject = $(event.target).text();
    console.log(myobject);

    if (myobject === solvedAns) {
      console.log("the answer should be " + solvedAns);
      correctAns++;
      console.log("correct " + correctAns);
    } else {
      wrongAns++;
      console.log("wrong " + wrongAns);
    }
    IstimerRun = false;
    timeExpired();
    $("#TimeLeft").text(converted);
  });
});
