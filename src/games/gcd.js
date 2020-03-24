import gameEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const findGcd = (randomNumber1, randomNumber2) => {
  const smallestNumber = randomNumber1 > randomNumber2 ? randomNumber1 : randomNumber2;
  for (let i = smallestNumber; i > 0; i -= 1) {
    if ((randomNumber1 % i === 0) && (randomNumber2 % i === 0)) {
      return i;
    }
  }

  return 1;
};

const task = 'Find the greatest common divisor of given numbers.';

const generateGameData = () => {
  const randomNumber1 = generateRandomNumber(0, 100);
  const randomNumber2 = generateRandomNumber(0, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = findGcd(randomNumber1, randomNumber2);

  return [question, String(correctAnswer)];
};

const startGame = () => gameEngine(task, generateGameData);

export default startGame;
