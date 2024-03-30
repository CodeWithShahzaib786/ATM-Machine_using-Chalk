#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000;
let myPin = 1234;
// Print Welcome message
console.log(chalk.blue("\n \t Welcome to Code With Shahzaib - ATM MACHINE\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("enter your pin code :")
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\n correct pin code! login successfully..\n"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select option",
            choices: ["withdraw", "check balance", "fastCash"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: chalk.yellow("enter your amount:")
            }
        ]);
        // =, -=, +=
        if (myBalance >= amountAns.amount) {
            console.log(myBalance -= amountAns.amount);
            console.log(chalk.green(` \n ${amountAns.amount} : withdraw Successfully.. \n`));
        }
        else {
            console.log(chalk.red("insufficient balance!"));
        }
        //  myBalance -= amountAns.amount;
        console.log(chalk.yellow(`\n your remaining balance is :  ${myBalance} \n`));
    }
    else if (operationAns.operation === "check balance") {
        console.log(chalk.green(`\n your balance is: ${myBalance} \n`));
    }
    else if (operationAns.operation === "fastCash") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amounts",
                type: "list",
                message: chalk.yellow("select your amount"),
                choices: [500, 1000, 5000, 10000]
            }
        ]);
        // =, -=, +=
        console.log(myBalance -= amountAnswer.amounts);
        console.log(chalk.green(` \n ${amountAnswer.amounts} : Withdraw Successfully.. \n`));
        console.log(chalk.yellow(`\n your balance is :${myBalance} \n`));
    }
}
else {
    console.log(chalk.red("\n incorrect pin code , Try Again! \n"));
}
