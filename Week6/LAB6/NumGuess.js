
const guess = document.getElementById("Guess");
const bd = document.getElementById("body");
var congrats = "congratulations!!! Right guess.";
var loss = "Sorry!!! Try again."
guess.onclick = function () {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
    var input = document.getElementById("input");
    const userInput = parseInt(input.value);

    bd.removeChild(bd.lastChild);

    const result = document.createElement("div")
    if (!isNaN(userInput) && userInput >= 1 && userInput <= 10) {
        if (userInput == randomNumber) {
            result.textContent = congrats;
        }
        else {
            result.textContent = loss;
        }
    }
    else {
        result.textContent = "Please enter 1 to 10";
    }

    bd.appendChild(result);

}




