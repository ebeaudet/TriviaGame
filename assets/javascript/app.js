$(document).ready()
    $(".answers").hide();
{
    

    //Game that will have 10 questions with 4 answers each, an image will be displayed after each question is answered 
    var questions = [

        {
            question: "The Simpsons live on which street?",
            answers: ["Woodview Terrace",
                "Pine Tree Terrace",
                "35th Street",
                "Evergreen Terrace"],
            correctAnswer: "Evergreen Terrace",
            image: "assets/images/742_Evergreen_Terrace.png"
        },

        {
            question: "What is Homer Simpson's job?",
            answers: ["Comcast Installer",
                "City Bus Driver",
                "Full Stack Developer",
                "Nuclear Power Plant Safety Inspector"],
            correctAnswer: "Nuclear Power Plant Safety Inspector",
            image: "assets/images/powerplant.gif"
        },

        {
            question: "What is the name of the Simpson's Neighbor?",
            answers: ["Bob Belcher",
                "Professor Frink",
                "Ned Flanders",
                "Edna Krabapple"],
            correctAnswer: "Ned Flanders",
            image: "assets/images/stupid_sexy_flanders.gif"
        },

        {
            question: "Whos is Mr Burn's assistant?",
            answers: ["Seymour Skinner",
                "Barnard Gumble",
                "Waylon Smithers",
                "Max Powers"],
            correctAnswer: "Waylon Smithers",
            image: "assets/images/smithers.gif"
        },

        {
            question: "What is the name of Homer's favorite bar?",
            answers: ["Joe's Cavern",
                "Moe's Tavern",
                "Duff's Place",
                "The Drink Hole"],
            correctAnswer: "Moe's Tavern",
            image: "assets/images/drunkgif.gif"
        },

        {
            question: "What is the name of Mr Burns' teddy bear",
            answers: ["Nono",
                "Gogo",
                "Bobo",
                "Soso"],
            correctAnswer: "Bobo",
            image: "assets/images/mrburns.gif"
        },

        {
            question: "What is the name of the school bus driver?",
            answers: ["Blotto",
                "Martin",
                "Bear",
                "Otto"],
            correctAnswer: "Otto",
            image: "assets/images/otto.gif"
        },

        {
            question: "What is Marge's maiden name?",
            answers: ["Bouvier",
                "Croupier",
                "Beaudet",
                "Bouffay"],
            correctAnswer: "Bouvier",
            image: "assets/images/marge.gif"
        },

        {
            question: "What is the name of Homer's brother?",
            answers: ["Hank Powell",
                "Herbert Powell",
                "Henry Powell",
                "Harry Powell"],
            correctAnswer: "Herbert Powell",
            image: "assets/images/herbert.png"
        },

        {
            question: "What is the name of the first Simpsons episode that aired in the U.S.",
            answers: ["Bart the Genius",
                "Simpsons Roasting On An Open Fire",
                "Some Enchanted Evening",
                "El Barto"],
            correctAnswer: "Bart the Genius",
            image: "assets/images/og.gif"
        }]



    var themeMusic = document.createElement("audio");
    var doh = document.createElement("audio");
    var woohoo = document.createElement("audio");
    var correct = 0;
    var wrong = 0;
    var missed = 0;
    var answerChosen;
    var countdown = 30;
    var qIndex = 0;
    themeMusic.setAttribute("src", "assets/okly.mp3");
    doh.setAttribute("src", "assets/Doh.mp3");
    woohoo.setAttribute("src", "assets/woohoo.mp3");

    $("#start").on("click", function () {
        displayQuestion();
        themeMusic.play();
    })

    function displayQuestion() {
        startTime();
        $(".answerBlock").show();
        $("#start").hide();
        $(".answers").show();
        $(".question").show();
        $(".question").text(questions[qIndex].question);
        $("#answer1").text(questions[qIndex].answers[0]);
        $("#answer1").attr("userGuess", questions[qIndex].answers[0]);
        $("#answer2").text(questions[qIndex].answers[1]);
        $("#answer2").attr("userGuess", questions[qIndex].answers[1]);
        $("#answer3").text(questions[qIndex].answers[2]);
        $("#answer3").attr("userGuess", questions[qIndex].answers[2]);
        $("#answer4").text(questions[qIndex].answers[3]);
        $("#answer4").attr("userGuess", questions[qIndex].answers[3]);
    };

    $(".answers").on("click", function () {
        var guess = ($(this).attr("userGuess"));
          stopTime();
        if (guess === questions[qIndex].correctAnswer) {
            correct++;
            $(".answers").hide();
            $(".question").html("WooHoo!" + "<br/></br/><img src='" + questions[qIndex].image + "'/>");
            woohoo.play();
            setTimeout(nextQuestion, 5000);
        } else {
            wrong++;
            $(".answers").hide();
            $(".question").html("D'oh!! <br/> The Correct Answer was <br />" + (questions[qIndex].correctAnswer) + "<br/></br/><img src='" + questions[qIndex].image + "'/>");
            doh.play();
            setTimeout(nextQuestion, 5000);
        }
    });

    function nextQuestion() {
        if (qIndex >= 9) {
            console.log(qIndex, questions.lenght - 1);
            $(".question").hide();
            $("#score").append("<h2> Correct: " + correct + "</h2>");
            $("#score").append("<h2> Incorrect: " + wrong + "</h2>");
            $("#score").append("<h2> Questions Missed: " + missed + "</h2>");
            var btnTryAgain = $("<button>");
            btnTryAgain.html("Try Again");
            btnTryAgain.addClass("tryAgain");
            $(".answerBlock").append(btnTryAgain);
        } else {
            qIndex++;
            displayQuestion();
        }

        $(btnTryAgain).on("click", function () {
            $("#score").empty();
            $("#score").hide();
            btnTryAgain.hide();
            correct = 0;
            wrong = 0;
            missed = 0;
            qIndex = 0;
            displayQuestion();
        
        });
    }

    function startTime() {
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        countdown--;
        $("#timeRemaining").html("<h3>Time remaining: " + countdown + "</h3>");

        if (countdown === 0) {
            missed++;
            $(".answerBlock").hide();
            $(".question").html("<p>Time's up! </p>"); 
            $(".question").append("The Correct Answer was <br />" + (questions[qIndex].correctAnswer) + "<br/></br/><img src='" + questions[qIndex].image + "'/>");
            doh.play();
            stopTime();
            setTimeout(nextQuestion, 5000);
        }
    }

    function stopTime() {
        clearInterval(intervalId);
        countdown = 30;
    }
  
}