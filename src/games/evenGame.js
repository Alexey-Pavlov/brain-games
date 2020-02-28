import { generateRandomNumber, gamesEngine } from '../index.js';

const isEven = (randomNumber) => (randomNumber % 2 === 0);

const evenGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const randomNumber = generateRandomNumber(0, 100);
  const question = `${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [task, question, String(correctAnswer)];
};

const callEngine = () => gamesEngine(evenGame);

export default callEngine;
