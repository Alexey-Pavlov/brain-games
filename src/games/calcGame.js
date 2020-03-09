import { generateRandomNumber, gamesEngine } from '../index.js';

const generateRandomMathSign = () => {
  const signs = ['+', '-', '*'];
  const randomIndex = generateRandomNumber(0, 2);

  return signs[randomIndex];
};

const task = 'What is the result of the expression?';

const generateGameData = () => {
  const randomNumber1 = generateRandomNumber(0, 100);
  const randomNumber2 = generateRandomNumber(0, 100);
  const operand = generateRandomMathSign();
  const question = `${randomNumber1} ${operand} ${randomNumber2}`;
  let correctAnswer;
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

  return [question, String(correctAnswer)];
};

const callGame = () => gamesEngine(task, generateGameData);

export default callGame;
