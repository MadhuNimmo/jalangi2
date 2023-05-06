var globalVar = 0;

function incrementGlobalVar() {
  globalVar++;
}

function logGlobalVar() {
  console.log("The value of globalVar is: " + globalVar);
}

incrementGlobalVar();
logGlobalVar(); // Output: The value of globalVar is: 1

incrementGlobalVar();
logGlobalVar(); // Output: The value of globalVar is: 2