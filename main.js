"use strict"
//NOTE: Try landscaping mode for better code's visibility on your mobile.
//THEME: BUILDING A ROBOTIC FACE
var js = {topics: "ES6 JS Generators"};

// CODE FOR YOU TO ANALYSE START FROM HERE =======

//PROB CASE QUESTION:
//What will the robot's face look like after building it with code below?

//Robot's Parts
function* antenna() {
    yield "/*";
}
function* leftEars() {
    yield "d";
}
function* rightEars() {
    yield "b";
}
//

function* robotFace() {
    yield* leftEars();
    yield "(ôLô)";
    yield* rightEars();
    antenna();
}

//Building Robot...
var processing = {};
processing.face = "";
for(let build of robotFace()) {
    processing.face += build;
}

//What will the 'processing.face' element alert on the screen?
////////////////////////////////
//YOUR OPTIONS:
// A) SyntaxError
// B) d(ôLô)b
// C) (ôLô)
// D) d(ôLô)b/*
// E) d(ôLô)b[object Generator]










































































































































































/*
PROJECT: MY JS PROB CASES
CODE WRITTEN BY: Luis Febro
GOAL:creating some practical problems for honing and training programming skills, particularly for Javascript language.
DATE OF LAUNCH: 05/24/19
*/


//You finally found the rest of the hidden codes. You are a curious person hehe .
//Curiosity is the first trait of keen and learnaholic learners like me and you all around! (=

window.onload = function() {
    //Declaring Everything
    var probcaseTitle = "PROB CASE: Building a robotic face with generators",
        buttonOutput = document.getElementsByClassName("buttonOutput")[0];

    //Showing topics in the footer
    document.getElementById("fTopics").innerHTML = js.topics;

    //Event Listeners
    buttonOutput.addEventListener("click", showAnswer);

    //Showing the answer of this PROB CASE.
    //Note that the variable/element which displays the answer is inserted below in the message.
    function showAnswer() {
        setTimeout(function() {
            var messageIntro = "Tell me. Did you analyze the question and have the answer?\nThen you can click OK. Otherwise go solving the Prob Case!";
            var messageAnsw = probcaseTitle + "\noutput is...:\n" + processing.face + "\n\n\n\n I congratulate you if you got it right.\nOtherwise go reading references about the topic (see footer) and try other prob cases!";
            if (confirm(messageIntro)) {
                alert(messageAnsw);
            } else {
                //it does not exactly close on mobile.
                window.close();
            }
        }, 2000);
    }
    //

    (function selfTyping() {
        //Declaring local vars.
        var targetText = probcaseTitle,
            leng = targetText.length,
            targetElement = document.querySelector(".backgroundCode span"),
            indLetter = 0,
            speedLetter = 300;

        //Here makes the work of displaying each letter
        //Pause typing after finish writing, too.
        setInterval(function() {
            targetElement.innerHTML += targetText.charAt(indLetter);
            indLetter++;
            leng--;

            if (leng < 0) {
                clearInterval(this);
                // document.getElementById("typingSound").pause();
                return;
            }
        }, speedLetter); //milliseconds
    })();

    // document.getElementById("typingSound").play();
};

// autoplay typing sound
//The following code is outsourced and written by Xenos. Adapted by Luis Febro.
//Source: https://xenos.reinom.com/mdn/audio-autoplay/audio-autoplay.html

