import { generateRandomNumber, gamesEngine } from '../index.js';

const primeGame = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const randomNumber = generateRandomNumber(0, 3500);
  const question = `${randomNumber}`;
  let correctAnswer = '';
  if (randomNumber < 2) {
    correctAnswer += 'no';
  }
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      correctAnswer += 'no';
      break;
    }
  }
  if (correctAnswer.length === 0) {
    correctAnswer += 'yes';
  }

  return [task, question, String(correctAnswer)];
};

const callEngine = () => gamesEngine(primeGame);

export default callEngine;
