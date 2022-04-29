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
