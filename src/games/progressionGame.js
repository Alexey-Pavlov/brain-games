import { generateRandomNumber } from '../index.js';

const progressionGame = () => {
  const task = 'What number is missing in the progression?';
  const beginOfProgression = generateRandomNumber(0, 50);
  const apDifference = generateRandomNumber(1, 20);
  const indexOfHiddenElement = generateRandomNumber(1, 10);
  let correctAnswer = 0;
  let question = 'Question: ';
  for (let i = 1; i <= 10; i += 1) {
    if (i === indexOfHiddenElement) {
      question += ' ..';
      correctAnswer = beginOfProgression + apDifference * i;
    } else {
      question += ` ${beginOfProgression + apDifference * i}`;
    }
  }
  return [task, question, String(correctAnswer)];
};

export default progressionGame;
