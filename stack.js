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

exports.checkIfLetterIsPalindrome = (word) => {
  var letters = []; // A Stack.

  var reverseword = "";

  // Put letters of word into stack.
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== " ") {
      delete word[i];
      continue;
    }

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

/**
 * Stack Data Structure
 * Operations on a stack are:
 * - push
 * - pop
 * - size
 * - peek
 */
exports.Stack = function () {
  this.count = 0;
  this.storage = {};

  // Adds a value onto the end of the stack.
  this.push = (value) => {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and returns the value at the end of the stack.
  this.pop = () => {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;

    var result = this.storage[this.count];

    delete this.storage[this.count];

    return result;
  };

  // Returns the size of the stack.
  this.size = () => {
    return this.count;
  };

  //   Peek returns the value at the end of the stack.
  this.peek = () => {
    return this.storage[this.count - 1];
  };
};
