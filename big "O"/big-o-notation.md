# Big "O" Notation:

* Big "O" Notation is a system and a way if generalizing code, talking about it, and comparing code & its performance to other pieces of code.


## Outline:
1. Why Big "O" Notation?
1. What is Big "O" Notation?
1. Simplify Big "O" Expressions.
1. Define "time complexity" and "space complexity".
1. Evaluate "time complexity" and "space complexity" of different algorithms using Big "O" Notation.
1. Describe what a logarithm is.

### Why write "good performing code" or care about Big "O"?
- Its important to have a precise vocabulary to talk about code performance.
- Useful for discussing trade-offs between different approaches.
- When your code slows down or crashes, identifying parts of the code that are inefficient can help us find dragging/error points in our app.

### Example

Suppose we want to write a function that calculates the sum of all numbers from 1 up to and including n.

```javascript

// Solution 1:
function addUpTo(n) {
    let total = 0;

    for(let i = 0; i <=n; i++) {
        total += i;
    }

    return total;
}

// Solution 2:
function addUpTo2(n) {
    return n * (n + 1) / 2
}

```


### What does better mean?
* Faster?
* Less memory-intensive?
* More readable?

The above are actually real factors to consider before writing a solution. We can check our codes performance as shown below:

```javascript

// Solution 1:
function addUpTo(n) {
  let total = 0;

  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
}

let t1 = process.uptime();
addUpTo(10000000);
let t2 = process.uptime();

console.log(`Time elapsed ${(t2 - t1) / 1000} seconds`);

// Solution 2:
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

let tt1 = process.uptime();
addUpTo2(10000000);
let tt2 = process.uptime();

console.log(`Time elapsed ${(tt2 - tt1) / 1000} seconds`);

```

