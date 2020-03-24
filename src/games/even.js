import gameEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const isEven = (number) => (number % 2 === 0);

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const question = generateRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [String(question), correctAnswer];
};

const startGame = () => gameEngine(task, generateGameData);

export default startGame;
