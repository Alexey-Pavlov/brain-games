import gamesEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const isEven = (randomNumber) => (randomNumber % 2 === 0);

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const randomNumber = generateRandomNumber(1, 100);
  const question = String(randomNumber);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [question, String(correctAnswer)];
};

const startGame = () => gamesEngine(task, generateGameData);

export default startGame;
