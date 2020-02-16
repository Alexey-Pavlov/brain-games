import readlineSync from 'readline-sync';

export const sayHello = () => {
    console.log('Welcome to the Brain Games!');
    const actual = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${actual}!`);
};

