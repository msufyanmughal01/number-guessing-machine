import inquirer from "inquirer"

const randomnumber = 18
const answer = await inquirer.prompt ([{
    name : "userguessednumber",
    type : "number",
    message: "please gueseed a number"
        
}])
if (answer.userguessednumber === randomnumber) {
    console.log 
    ("congratulation! you guessed the right answer")
} 
else {console.log ("you guessed the wrong answer")

}