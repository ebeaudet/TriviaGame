$(document).ready()

{

    //Game that will have 10 questions with 4 answers each, an image will be displayed after each question is answered 
    var questions = [

        {
            question: "The Simpsons Live on which street?",
            answers: ["Woodview Terrace",
                "Pine Tree Terrace",
                "35th Street",
                "Evergreen Terrace"],
            correctAnswer: 4,
            image: "assets/images/742_Evergreen_Terrace.png"
        },

        {
            question: "What is Homer Simpson's job?",
            answers: ["Comcast Installer",
                "City Bus Driver",
                "Full Stack Developer",
                "Nuclear Power Plant Safety Inspector"],
            correctAnswer: 4,
            image: "assets/images/powerplant.png"
        },

        {
            question: "What is the name of the Simpson's Neighbor?",
            answers: ["Bob Belcher",
                "Professor Frink",
                "Ned Flanders",
                "Edna Krabapple"],
            correctAnswer: 3,
            image: "assets/images/stupid_sexy_flanders.gif"
        },

        {
            question: "Whos is Mr Burn's assistant?",
            answers: ["Seymour Skinner",
                "Barnard Gumble",
                "Waylon Smithers",
                "Max Powers"],
            correctAnswer: 3,
            image: "assets/images/smithers.gif"
        },

        {
            question: "What is the name of Homer's favorite bar?",
            answers: ["Joe's Cavern",
                "Moe's Tavern",
                "Duff's Place",
                "The Drink Hole"],
            correctAnswer: 2,
            image: "assets/images/drunk.gif"
        },

        {
            question: "What is the name of Mr Burns' teddy bear",
            answers: ["Nono",
                "Gogo",
                "Bobo",
                "Soso"],
            correctAnswer: 3,
            image: "assets/images/mrburns.gif"
        },

        {
            question: "What is the name of the school bus driver?",
            answers: ["Blotto",
                "Martin",
                "Bear",
                "Otto"],
            correctAnswer: 4,
            image: "assets/images/otto.gif"
        },

        {
            question: "What is Marge's maiden name?",
            answers: ["Bouvier",
                "Croupier",
                "Beaudet",
                "Bouffay"],
            correctAnswer: 1,
            image: "assets/images/marge.gif"
        },

        {
            question: "What is the name of Homer's brother?",
            answers: ["Hank Powell",
                "Herbert Powell",
                "Henry Powell",
                "Harry Powell"],
            correctAnswer: 2,
            image: "assets/images/herbert.png"
        },

        {
            question: "What is the name of the first Simpsons episode that aired in the U.S.",
            answers: ["Bart the Genius",
                "Simpsons Roasting On An Open Fire",
                "Some Enchanted Evening",
                "El Barto"],
            correctAnswer: 1,
            image: "assets/images/og.gif"
        }]



    var themeMusic = document.createElement("audio");
    var doh = document.createElement("audio");
    var woohoo = document.createElement("audio");
    var correct;
    var wrong;
    var answerChosen;
    var countdown = 30;
    var missed;

    themeMusic.setAttribute("src", "assets/theme.mp3");
    doh.setAttribute("src", "assets/Doh.mp3");
    woohoo.setAttribute("src", "assets/woohoo.mp3");
    $("#start").on("click", function () {
        themeMusic.play();
        startTime();
        displayQuestion();
    });

    function displayQuestion() {
        for (j = 0; j < questions.length; j++) {
            $(".question").text(this.questions[j].question);
            console.log(j);
        }
    }

    function startTime() {
        intervalId = setInterval(decrement, 100);
        //$("#timeRemaining").html("<h3>Time remaining: " + countdown + "</h3>");
    }

    function decrement() {
        countdown--;
        $("#timeRemaining").html("<h3>Time remaining: " + countdown + "</h3>");

        if (countdown === 0) {
            missed++;
            $(".answers").html("<p>Time is up! </p>");
            doh.play();
            stopTime();
        }
    }

    function stopTime() {
        clearInterval(intervalId);
    }
}