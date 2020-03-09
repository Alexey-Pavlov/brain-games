import { generateRandomNumber, gamesEngine } from '../index.js';

const isEven = (randomNumber) => (randomNumber % 2 === 0);

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const randomNumber = generateRandomNumber(0, 100);
  const question = String(randomNumber);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [question, String(correctAnswer)];
};

const callGame = () => gamesEngine(task, generateGameData);

export default callGame;
