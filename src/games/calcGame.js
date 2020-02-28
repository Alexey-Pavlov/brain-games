import { generateRandomNumber, gamesEngine } from '../index.js';

const generateRandomMathSign = () => {
  const arrayOfSigns = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * (2 + 1));

  return arrayOfSigns[randomIndex];
};

const calcGame = () => {
  const task = 'What is the result of the expression?';
  const randomNumber1 = generateRandomNumber(0, 100);
  const randomNumber2 = generateRandomNumber(0, 100);
  const operand = generateRandomMathSign();
  const question = `${randomNumber1} ${operand} ${randomNumber2}`;
  let correctAnswer = 0;
  switch (operand) {
    case '+':
      correctAnswer = randomNumber1 + randomNumber2;
      break;
    case '-':
      correctAnswer = randomNumber1 - randomNumber2;
      break;
    case '*':
      correctAnswer = randomNumber1 * randomNumber2;
      break;
    default:
      break;
  }

  return [task, question, String(correctAnswer)];
};

const callEngine = () => gamesEngine(calcGame);

export default callEngine;
