import gamesEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const generateRandomMathSign = () => {
  const signs = ['+', '-', '*'];
  const randomIndex = generateRandomNumber(0, signs.length - 1);

  return signs[randomIndex];
};

const task = 'What is the result of the expression?';

const generateGameData = () => {
  const randomNumber1 = generateRandomNumber(0, 100);
  const randomNumber2 = generateRandomNumber(0, 100);
  const sign = generateRandomMathSign();
  const question = `${randomNumber1} ${sign} ${randomNumber2}`;
  let correctAnswer;
  switch (sign) {
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

const startGame = () => gamesEngine(task, generateGameData);

export default startGame;
