const game = () => {
  let pScore = 0;
  let cScore = 0;

  //start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        // console.log(computerChoice); returns randomly generatwed strings out of rock, paper, scissors

        setTimeout(() => {
          //call the function compareHands
          compareHands(this.textContent, computerChoice);

          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 1000);

        //Animation
        playerHand.style.animation = "shakePlayer 1s ease";
        computerHand.style.animation = "shakeComputer 1s ease";
      });

      // when there is only one parameter, we can get rid of the paranthesis
      //here, we used normal function instead of arrow function bcoz by using "this" keyword we wanna target option array, but by using arrow function, we won't be able to use it.
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");

    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update text
    const winner = document.querySelector(".winner");

    //check for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It's a Tie";
      return;
    }
    //check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
  };

  //call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();
