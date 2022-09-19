let score = 20;
let highscore = 0;
let randomNumber = Math.floor(Math.random() * 20 + 1);
document.querySelector(".check").addEventListener(
    "click", function () {
        let guess = (Number)(document.querySelector(".guess").value);
        if (!guess || guess < 0 || guess > 21) {
            document.querySelector(".message").innerHTML = "Input is not Valid or out of range";

        }
        else if (guess > randomNumber) {
            document.querySelector(".message").innerHTML = "guess number is high";
            score--;
            document.querySelector(".score").innerHTML = score;
        }
        else if (guess < randomNumber) {
            document.querySelector(".message").innerHTML = "guess number is low";
            score--;
            document.querySelector(".score").innerHTML = score;
        }
        else if (guess === randomNumber) {
            document.querySelector(".message").innerHTML = "guess number is correct";
            document.querySelector(".number").innerHTML = randomNumber;
            document.querySelector("body").style.backgroundColor = 'green';
            document.querySelector(".number").style.width = '30rem';
            if(score > highscore){
                highscore = score;
                document.querySelector(".highscore").innerHTML = highscore; 
            }
            
        }
    })
    document.querySelector(".again").addEventListener(
        "click", function() {
            score = 20;
            randomNumber = Math.floor(Math.random() * 20 + 1);
            document.querySelector(".guess").value = "";
            document.querySelector(".number").innerHTML = "?";
            document.querySelector(".message").innerHTML = "Start guessing...";
            document.querySelector(".score").innerHTML = score;
            document.querySelector("body").style.backgroundColor = "#222";
            document.querySelector(".number").style.width = "15rem";
        }
    )

