import { generateRandomNumber, gamesEngine } from '../index.js';

const findGcd = (smallestNumber, randomNumber1, randomNumber2) => {
  for (let i = smallestNumber; i > 0; i -= 1) {
    if ((randomNumber1 % i === 0) && (randomNumber2 % i === 0)) {
      return i;
    }
  }
  return 1;
};

const gcdGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const randomNumber1 = generateRandomNumber(0, 100);
  const randomNumber2 = generateRandomNumber(0, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const smallestNumber = randomNumber1 > randomNumber2 ? randomNumber1 : randomNumber2;
  const gcd = findGcd(smallestNumber, randomNumber1, randomNumber2);

  return [task, question, String(gcd)];
};

const callEngine = () => gamesEngine(gcdGame);

export default callEngine;
