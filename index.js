#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//print welcome message
console.log(chalk.bold.redBright(`\n \t\t <<<========================================>>>`));
console.log(chalk.bold.redBright(`<<<==========>>>  ${chalk.magenta.bold("Wellcome  to  my  quiz system  project.")} <<<================>>>`));
console.log(chalk.bold.redBright(`\t\t <<<========================================>>>\n`));
console.log(chalk.bold.greenBright("\n \t\t *** You are required to gain maximum 4 points for window ***."));
let points = 0;
let question1 = await inquirer.prompt([
    {
        name: "one",
        type: "list",
        message: "Typescript is developed and maintained by?",
        choices: ["Facebook", "Google", "Microsoft", "Mozilla"]
    }
]);
if (question1.one == "Microsoft") {
    console.log(chalk.bold.yellow("your answer is correct"));
    points++;
}
else {
    console.log(chalk.bold.greenBright("incorrect answer"));
}
let question2 = await inquirer.prompt([
    {
        name: "two",
        type: "list",
        message: "How do you define a custom type in typescript?",
        choices: ["Interface", "Typeof", "Type", "Both 1 and 3"]
    }
]);
if (question2.two == "Both 1 and 3") {
    console.log(chalk.bold.yellow("your answer is correct"));
    points++;
}
else {
    console.log(chalk.bold.greenBright("incorrect answer"));
}
let question3 = await inquirer.prompt([
    {
        name: "three",
        type: "list",
        message: "How do you donate a variable as readonly in typescript?",
        choices: ["readonly", "static", "const", "fixed"]
    }
]);
if (question3.three == "readonly") {
    console.log(chalk.bold.yellow("your answer is correct"));
    points++;
}
else {
    console.log(chalk.bold.greenBright("incorrect answer"));
}
let question4 = await inquirer.prompt([
    {
        name: "four",
        type: "list",
        message: "Which of the following is not a valid TypeScript data type?",
        choices: ["symbol", "object", "tuple", "enum"]
    }
]);
if (question4.four == "object") {
    console.log(chalk.bold.yellow("your answer is correct"));
    points++;
}
else {
    console.log(chalk.bold.greenBright("incorrect answer"));
}
let question5 = await inquirer.prompt([
    {
        name: "five",
        type: "list",
        message: "Which keyword is used to declare a variable that can be reassigned in javascript?",
        choices: ["var", "const", "let", "static"]
    }
]);
if (question5.five == "let") {
    console.log(chalk.bold.yellow("your answer is correct"));
    points++;
}
else {
    console.log(chalk.bold.greenBright("incorrect answer"));
}
if (points >= 4) {
    console.log(chalk.bold.cyanBright("congratulation!"));
    console.log(chalk.bold.magentaBright(`your points have: ${points}`));
}
else {
    console.log(chalk.bold.cyanBright("you loss! try next time"));
    console.log(chalk.bold.magentaBright(`your points have: ${points}`));
}
