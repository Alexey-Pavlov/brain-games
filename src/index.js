import readlineSync from 'readline-sync';

export default (task, currentGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [currentTask, correctAnswer] = currentGame();
    const question = `Question: ${currentTask}`;
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
