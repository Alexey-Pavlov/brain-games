import readlineSync from 'readline-sync';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const wrongAnswerMessage = (answer, correctAnswer, name) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
};

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
  return actual;
};

export const gamesEngine = (currentGame) => {
  const name = greeting();
  console.log(currentGame()[0]);
  for (let i = 0; i < 3; i += 1) {
    const valuesArray = currentGame();
    const question = valuesArray[1];
    const correctAnswer = valuesArray[2];
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      wrongAnswerMessage(answer, correctAnswer, name);
      return 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return 0;
};

export {
  greeting, generateRandomNumber,
};
