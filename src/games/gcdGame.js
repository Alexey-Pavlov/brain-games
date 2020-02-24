import { generateRandomNumber } from '../index.js';

const gcdGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const randomNumber1 = generateRandomNumber(0, 100);
  const randomNumber2 = generateRandomNumber(0, 100);
  const question = `Question: ${randomNumber1} ${randomNumber2}`;
  const smallestNumber = randomNumber1 > randomNumber2 ? randomNumber1 : randomNumber2;
  for (let i = smallestNumber; i > 0; i -= 1) {
    if ((randomNumber1 % i === 0) && (randomNumber2 % i === 0)) {
      return [task, question, String(i)];
    }
  }
  return task;
};

export default gcdGame;
