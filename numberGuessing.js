var secretNumber = Math.floor(Math.random() * 5) +1;

function guessNumber()
    {
    var guess = document.getElementById("guess").value;
    document.getElementById("output1").innerHTML = "You guessed a " + guess; 
    document.getElementById("output2").innerHTML = "Your secret number is " + secretNumber; 

    if (guess > secretNumber)
        {
        alert("Too high");
        }
    else if (guess < secretNumber)
        {
        alert("Too low");
        }
    else
        {
        alert("You got it!");
        }     
    } 
