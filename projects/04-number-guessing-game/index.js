const rl = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const difficulties = {
  Easy: 1,
  Medium: 2,
  Hard: 3,
};

const difficultyMessage = `
Please select the difficulty level (example: 1):
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)
`;

const initialMessage = `
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.

${difficultyMessage}
`;

let chances;
let randomNumber = Math.ceil(Math.random() * 100);
let attempts = 0;

const getChances = (difficulty) => {
  switch (difficulty) {
    case 1:
      return 10;
    case 2:
      return 5;
    case 3:
      return 3;
    default:
      return 0;
  }
};

const game = () => {
  rl.question('Enter your guess: ', (value) => {
    const num = Number(value);
    if (isNaN(num) || num < 1 || num > 100) {
      console.log('You must enter a number from 1 to 100');
      game();
      return;
    }

    attempts += 1;
    if (num === randomNumber) {
      console.log(
        `Congratulations! You guessed the correct number in ${attempts} attempts.`
      );
      rl.close();
      return;
    }

    if (num < randomNumber) {
      console.log(`Incorrect! The number is greater than ${num}.`);
    } else {
      console.log(`Incorrect! The number is less than ${num}.`);
    }

    if (attempts === chances) {
      console.log(
        `You have already used up all your attempts. Correct number: ${randomNumber}. Game over.`
      );
      rl.close();
      return;
    }

    game();
  });
};

const start = (difficultyNum) => {
  chances = getChances(difficultyNum);
  const difficultyName = Object.keys(difficulties)[difficultyNum - 1];
  console.log(`
Great! You have selected the ${difficultyName} difficulty level.
Let's start the game!
`);
  game();
};

const setDifficulty = (value) => {
  const num = Number(value);
  if (isNaN(num) || !Object.values(difficulties).includes(num)) {
    console.log(difficultyMessage);
    rl.question('', setDifficulty);
  } else {
    start(num);
  }
};

rl.question(initialMessage, setDifficulty);
