import { generateRandomNumber, gamesEngine } from '../index.js';

const progressionGame = () => {
  const task = 'What number is missing in the progression?';
  const lengthOfProgression = 10;
  const beginOfProgression = generateRandomNumber(0, 50);
  const apDifference = generateRandomNumber(1, 20);
  const indexOfHiddenElement = generateRandomNumber(1, lengthOfProgression);
  let correctAnswer = 0;
  let question = '';
  for (let i = 1; i <= lengthOfProgression; i += 1) {
    if (i === indexOfHiddenElement) {
      question += ' ..';
      correctAnswer = beginOfProgression + apDifference * i;
    } else {
      question = `${question} ${beginOfProgression + apDifference * i}`;
    }
  }

  return [task, question, String(correctAnswer)];
};

const callEngine = () => gamesEngine(progressionGame);

export default callEngine;
