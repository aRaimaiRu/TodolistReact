const { spawn } = require("child_process");
const readline = require("readline");
const chalk = require("chalk");
const figlet = require("figlet");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

console.log(
  chalk.bgRed.whiteBright(
    figlet.textSync("Codecamp 4 Code Kata", { horizontalLayout: "full" })
  )
);

console.log(
  chalk.greenBright(
    "Which day do you want to test? Typing 1 means the test of day 1."
  )
);

rl.on("line", input => {
  if (new RegExp(/^(?!0)\d{1,2}$/g).test(input)) {
    rl.close();
    runJests(input);
  } else {
    console.log(
      chalk.red(
        "Please enter the number in a range of 1 or 2 digit(s) and It shouldn't be preceded by zero.\n>"
      )
    );
  }
});

function runJests(day) {
  spawn(`jest`, [`src/day${day}`], { stdio: "inherit", shell: true });
}
