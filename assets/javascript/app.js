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
    if (quCount >= 10) {
      IstimerRun = false;
      $('#title').text("Trivia Completed");
      $('.resultAns').text("Total : You have  " + correctAns+ "  correct answers");
      $('.resultAns').css({"background-color":""});
      var newPara= $("<p>Wrong Answers: "+ wrongAns + "</p>");
      var newPara2= $("<p> Unanswered: "+ unanswered + "</p>");
      $('.resultAns').append(newPara);
     
      $('.resultAns').append(newPara2); 
      return;
    }
    timeLeft = 15;
    setTimeout(function() {
      runQuiz(questionArr[quCount]);
    }, 5000);

    
  }
  
  var intervalId;
  var converted ;
  var correctAns = 0;
  var wrongAns = 0;
  var unanswered= 0;
  var timeLeft = 0;
  var IstimerRun = false;
/*   $("#quizQuestion").on("mouseenter", () => {
    $(".nav-menu").show(500);
  }); */
  /* 
  $(".nav-menu").on("mouseleave", () => {
    $(".nav-menu").hide(500);
  });
 */
$(".nav-menu").show(500);
  quizObj = {
    question1: {
      q1: "The name of mafia series crime boss on HBO",
      a1: "Tony Soprano",
      a2: "Anthony Scaramucci",
      a3: "Joey Fantone",
      a4: "Anthony Carlito",
      v1: "giphy6.gif",
      v2: "snlwrong.gif"
    },

    question2: {
      q1: "Which country has a maple leaf on its flag?",
      a1: "Canada",
      a2: "Mexico",
      a3: "Peru",
      a4: "Ireland",
      v1: "canada.gif",
      v2: "thumbdown.gif"
    },

    question3: {
      q1: "The chemical element a diamond is made of?",
      a1: "carbon",
      a2: "calcium ",
      a3: "iron",
      a4: "phosphorus",
      v1: "diamond.gif",
      v2: "brittanyno.gif"
    },

    question4: {
      q1: "The European language first spoken in America",
      a1: "Spanish",
      a2: "English ",
      a3: "French",
      a4: "Italian",
      v1: "spanish.gif",
      v2: "nicetry.gif"
    },

    question5: {
      q1: "The name of poker hand with 3 of kind and pair?",
      a1: "full house",
      a2: "royal flush ",
      a3: "straight",
      a4: "flush",
      v1: "fullhouse.gif",
      v2: "wrongbutton.gif"
    },

    question6: {
      q1: "The actor who voiced Shrek?",
      a1: "Mike Myers",
      a2: "Eddie Murphy",
      a3: "John Lithgow",
      a4: "Chris Miller",
      v1: "shrek.gif",
      v2: "wrongshout.gif"
    },

    question7: {
      q1: "The official language of Brazil?",
      a1: "Portuguese",
      a2: "Spanish ",
      a3: "Italian",
      a4: "French",
      v1: "brazil.gif",
      v2: "roseno.gif"
    },

    question8: {
      q1: "The postal Worker on Seinfeld",
      a1: "Newman",
      a2: "Peterman",
      a3: "Sherman",
      a4: "Wilson",
      v1: "giphy5.gif",
      v2: "no.gif"
    },

    question9: {
      q1: "The 80s movie was Alan Rickman's first feature role",
      a1: "Die Hard",
      a2: "Quigley Down Under",
      a3: "January Man",
      a4: "Robin Hood: Prince of Thieves",
      v1: "diehard.gif",
      v2: "noturn.gif"
    },

    question10: {
      q1: "The only U.S. state that only border one other",
      a1: "Maine",
      a2: "Washington",
      a3: "Florida",
      a4: "Michigan",
      v1: "maine.gif",
      v2: "wrongwrong.gif"
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
  var imagev1;
  var imagev2;
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
   var liArr = ["#a1", "#a2", "#a3", "#a4"];
   var pos=0;
  function runQuiz(quest) {
    solvedAns = quizObj[quest].a1;
    var qShuffleArr = shuffle();
    $("#quizQuestion").text(quizObj[quest].q1);
    
    $("#theImg").remove();
    /* console.log(solvedAns);
    console.log(qShuffleArr[0]);
    console.log(quizObj.question1[qShuffleArr[0]]); */
     $(".pick").css("background-color","");
     $('.resultAns').text("");
     $('.resultAns').css({"background-color":""});
   
    $("#a1").text(quizObj[quest][qShuffleArr[0]]);
    $("#a2").text(quizObj[quest][qShuffleArr[1]]);
    $("#a3").text(quizObj[quest][qShuffleArr[2]]);
    $("#a4").text(quizObj[quest][qShuffleArr[3]]);
     
    pos =  qShuffleArr.indexOf("a1"); 
    imagev1= quizObj[quest].v1;
    imagev2= quizObj[quest].v2; 
    IstimerRun =true;
    clearInterval(intervalId);
    intervalId= setInterval(count,1000);
     
    $("#TimeLeft").text(converted);
  }
 
  $("#Start").on("click", () => {
    timeLeft = 15;
    $("#TimeLeft").text(timeLeft);
    runQuiz(questionArr[quCount]);
     $("#Start").hide();
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
      unanswered++;
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
     
     $(event.target).css({"background-color":"#4CFF4C"});
      console.log("correct " + correctAns);
     $('.resultAns').text("Correct : You have  " + correctAns+ "  correct answers");
     $('.resultAns').css({"background-color":"#4CFF4C"});
     
     $("#theImg").remove();
      let imageStyle = "width:300px; height:300px; margin-left:100px;";
      var imgpath = "assets/images/"+ imagev1;
      $(".container").append("<img id='theImg' src='"+ imgpath  +"' style='"+ imageStyle +" ' "+">");

    } else {  // wrong selection
      wrongAns++;
      $(event.target).css({"background-color":"#FF3333"});
      console.log("wrong " + wrongAns);
      $('.resultAns').text("Incorrect : You have  " + wrongAns+ "  incorrect answers");
     
     
       console.log("color " + liArr[pos]);

      $(liArr[pos]).css({"background-color":"#4CFF4C"});


     
      $("#theImg").remove();
      let imageStyle = "width:300px; height:300px; margin-left:100px;";
      var imgpath = "assets/images/"+ imagev2;
      $(".container").append("<img id='theImg' src='"+ imgpath  +"' style='"+ imageStyle +" ' "+">");

    }
    IstimerRun = false;
    timeExpired();
    $("#TimeLeft").text(converted);
  });
});
