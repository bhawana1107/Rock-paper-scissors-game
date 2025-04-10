let win = 0;
let lose = 0;

function handleClick(el) {
    let userChoice = el.id;

    let choices = ["stone", "paper", "scissor"];

    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = "";

    if (userChoice == computerChoice) {
        result = "It's a tie!";
        document.getElementById('result').innerHTML = result;
    } else if (userChoice == "stone" && computerChoice == "scissor" ||
        userChoice == "scissor" && computerChoice == "paper" ||
        userChoice == "paper" && computerChoice == "stone"
    ) {
        result = "You win!";
        document.getElementById('result').innerHTML = result;
        win++;
        document.getElementById('your').innerHTML = win;
    } else {
        result = "You Lose!";
        document.getElementById('result').innerHTML = result;

        lose++;
        document.getElementById('computer').innerHTML = lose;
    }

}