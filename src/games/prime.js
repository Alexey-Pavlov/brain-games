import gameEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateGameData = () => {
  const randomNumber = generateRandomNumber(0, 3500);
  const question = String(randomNumber);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startGame = () => gameEngine(task, generateGameData);

export default startGame;
