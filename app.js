const { checkIfLetterIsPalindrome, Stack } = require("./stack");

checkIfLetterIsPalindrome("race car");

var myStack = new Stack();

myStack.push("b");
myStack.push("o");
myStack.push("b");
myStack.push("e");
console.log("First Peek- ", myStack.peek());
console.log("Fist Pop- ", myStack.pop());
console.log("Second Peek- ", myStack.peek());
myStack.push("freeCodeCamp");
console.log("Stack Size- ", myStack.size());
console.log("Third Peek- ", myStack.peek());
console.log("Second Pop- ", myStack.pop());
console.log("Fourth Peek- ", myStack.peek());
