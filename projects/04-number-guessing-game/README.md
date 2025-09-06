# Number Guessing Game

A simple command-line game built with Node.js where you try to guess a randomly generated number within a certain range and number of attempts.

## Features

- **Random Number Generation**: The game picks a random number within a specified range.
- **User Interaction**: Prompts the user to guess the number and provides feedback.
- **Limited Attempts**: You have a limited number of tries to guess the correct number.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)

To check if Node.js is installed, run:

```sh
node -v
```

## Usage

Navigate to the project directory in your terminal:

```sh
cd roadmap.sh-backend-projects\projects\04-number-guessing-game
```

Run the game with:

```sh
node index.js
```

### Example

You will see prompts like:

```
Enter your guess: 50
Incorrect! The number is greater than 50.
Enter your guess: 75
Incorrect! The number is less than 75
Enter your guess: 63
Congratulations! You guessed the correct number in 3 attempts.
```

If you run out of attempts, the game will reveal the correct number.

---

## Link

[roadmap.sh](https://roadmap.sh/projects/number-guessing-game)
