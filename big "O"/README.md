# Big "O" Notation:

* Big "O" Notation is a system and a way if generalizing code, talking about it, and comparing code & its performance to other pieces of code.


## Outline:
1. Why Big "O" Notation?
1. What is Big "O" Notation?
1. Simplify Big "O" Expressions.
1. Define "time complexity" and "space complexity".
1. Evaluate "time complexity" and "space complexity" of different algorithms using Big "O" Notation.
1. Describe what a logarithm is.

## Time Complexity.

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


### The problem with Time:
- Different machines record different times.
- The same machine will record different time on different algorithms.
- Fast algorithms, speed measurements may not be precise enough.

### Well if not time, then what??
- Rather than counting seconds, lets count the number of operations the simple computer has to perform.

* Regardless of the exact number, the number of operations grows roughly proportionally with n, in the first solution's case, but in the second we are able to see that they are only three (3) operations no matter the size of n.

## Simplifying Expressions.
When determining the time complexity of an algorithm, there are some helpful rules of thumb for big "O" expressions. These rules, are consequences of the definition of big "O" notation.

* Constants do not matter. * Ranked in order of fastest to slowest.

| Number Of Operations | Simplified |
| ------ | ------ |
| O(500) | O(1) |
| O(2n) | O(n) |
| O(13n²) | O(n²) |

* Smaller terms do not matter.

| Number Of Operations | Simplified |
| ------ | ------ |
| O(n + 10) | O(n) |
| O(1000n + 50) | O(n) |
| O(n² + 5n + 8) | O(n²) |

### What to consider when analyzing complexity with Big "O".
Things do get complicated, but there are some rules of thumb that can help but won't always work, but helpful to start with:
 #### Big "O" Shorthands:
 1. `Arithmetic Operations are constant` - This means "BODMAS" operations are going to happen at constant time.
 1. `Variable assignment is constant`.
 1. `Accessing elements in array by index or an object by key is constant`.
 1. `In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop


 ##### Examples:
 ```javascript
 // Solution I: O(n)
  function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) { // The loop goes to 5 or n if n is larger than 5
      console.log(i)
    }
  }
 ```
 * In the above `Solution I`, we see that the Big "O" is `O(n)`, because as n grows so do the number of operations. Meaning if we pass 10, there will be 10 operations, and if I pass 1,000,000,000 there will be 1,000,000,000 operations.

 ```javascript
  // Solution II: O(1)
  function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) { // The loop goes to 5 or n if n is smaller than 5
      console.log(i)
    }
  }
 ```
 * If n grows the big "O" remains constant meaning if we add 2, 3, then 5, the graph would grow and till 5 and will not pass there, meaning the Big "O" of `Solution II` is `O(1)`




 
