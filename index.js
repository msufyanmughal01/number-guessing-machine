#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 10 + 1);
console.log("welcome to number guessing game".toUpperCase());
const answer = await inquirer.prompt([{
        name: "userguessednumber",
        type: "number",
        message: "please gueseed a number between 1-10"
    }]);
if (answer.userguessednumber === randomnumber) {
    console.log(`congratulation! you guessed the right answer ${randomnumber}`.toUpperCase());
}
else {
    console.log(`YOU GUESSED WRONG THE ACTUAL NUMBER IS ${randomnumber}`);
}
