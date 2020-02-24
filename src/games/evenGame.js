import { generateRandomNumber } from '../index.js';

const evenGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  const randomNumber = generateRandomNumber(0, 100);
  const question = `Question: ${randomNumber}`;
  const isEven = (randomNumber % 2 === 0);
  const correctAnswer = isEven ? 'yes' : 'no';
  return [task, question, String(correctAnswer)];
};

export default evenGame;
