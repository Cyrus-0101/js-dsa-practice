/**
 * Stack Data Structure
 * Operations on a stack are:
 * (last in first out).
 * push - add an element to the top of the stack.
 * pop - remove an element from the top of the stack.
 * peek - look at the top element of the stack.
 * length - return the length of the stack.
 *
 * An array can be used as a stack in JavaScript.
 *
 * Example: Use an array stack to identify palindromes.
 */

var letters = []; // A Stack.

const checkIfLetterIsPalindrome = (word) => {
  var reverseword = "";

  // Put letters of word into stack.
  for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  // pop letters off stack and put them in reverseword.
  for (var i = 0; i < word.length; i++) {
    reverseword += letters.pop();
  }

  if (reverseword === word) {
    console.log(word + " is a palindrome.");
  } else {
    console.log(word + " is not a palindrome.");
  }
};

checkIfLetterIsPalindrome("node");
