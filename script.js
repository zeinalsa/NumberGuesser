let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random()*10);
};

const getAbsoluteDistance = (userGuess, computerGuess, target) => {
  let computerDistance = target - computerGuess; // 1 4 -3
  let userDistance = target - userGuess; // 1 3 -1
  if (computerDistance < 0) {
      computerDistance *= -1;
  }
  if (userDistance < 0) {
      userDistance *= -1
  }
  if (userDistance <= computerDistance ) { //22
    return true;
  } else {
    return false;
  }
}
  
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  if (userGuess < 0 || userGuess > 10) {
    alert()
  }
    

  return getAbsoluteDistance(userGuess, computerGuess, targetNumber);
};

const updateScore = winner => {
  switch (winner) {
    case 'human' : humanScore += 1; break;
    case 'computer' : computerScore += 1; break;
  };
};

const advanceRound = () => {
  currentRound += 1;
};