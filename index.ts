#! /usr/bin/env node

import inquirer from "inquirer";

let answer = await inquirer.prompt([
  { message: "Enter your first number:", type: "Number", name: "firstNumber" },
  {
    message: "Enter your second number:",
    type: "Number",
    name: "secondNumber",
  },
  {
    message: "Enter one of the operators to perform operation:",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answer.operator === "Addition") {
  let result = Number(answer.firstNumber) + Number(answer.secondNumber);
  console.log("Your value is: " + result);
} else if (answer.operator === "Subtraction") {
  let result = Number(answer.firstNumber) - Number(answer.secondNumber);
  console.log("Your value is: " + result);
} else if (answer.operator === "Multiplication") {
  let result = Number(answer.firstNumber) * Number(answer.secondNumber);
  console.log("Your value is: " + result);
} else if (answer.operator === "Division") {
  let result = Number(answer.firstNumber) / Number(answer.secondNumber);
  console.log("Your value is: " + result);
} else {
  console.log("Please enter correct operator.");
}
