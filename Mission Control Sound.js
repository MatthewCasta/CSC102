//Matt Castaneda CSC102
function betterCountdown() {
    var currTime = 10;
    for (var i = 1; i <= 11; i++) {
        if (i == 11) {
            setTimeout(function () {
                //Below code is for the Looped Timer
                document.getElementById("countdownDisplay").innerHTML = "We Have Lift Off!!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                //When the count down is half way finished the message will change 
                document.getElementById("countdownDisplay").innerHTML =
                    "Main Engine Start..Warning Less than half way to launch, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                // This shouws the main message that will be displayed at start of countdown
                document.getElementById("countdownDisplay").innerHTML = "T-minus " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}
function playlaunch() {
    mySound = new sound("t-minuslaunch.mp3");
}
function playinsidelaunch() {
    mySound = new sound("inside shuttle.mp3")
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
        this.sound.play();
    }
}
