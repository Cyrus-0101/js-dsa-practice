// Write a function which takes in a string and returns counts of each character in the string.

// function charCount(str) {
//   str = str.toLowerCase();
//   let obj = {};

//   for (let char of str) {
//     if (/[a-z0-9]/.test(char)) {
//       // Eliminates values that are not alphanumeric
//       obj[char] = ++obj[char] || 1;
//     }
//   }
//   return obj;
// }

// console.log(charCount("helLo world!"));

// Write a function called same which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency values must be the same.
// Naive approach O(n²) time complexity.
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     console.log(arr2);
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [25, 4, 1, 9, 16];
// console.log(same(arr1, arr2));

// Let's refactor the function above to have O(n) time complexity:
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (let val of arr1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }

//   for (let val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }

//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }

//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }
//   console.log(frequencyCounter1);
//   console.log(frequencyCounter2);
//   return true;
// }

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [25, 4, 1, 9, 16];
// console.log(same(arr1, arr2));

// Using Frequency Counter, Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another such as `cinema` to form `iceman`.

function validAnagram(str1, str2) {
  const arr1 = str2.toLowerCase().split("");
  const arr2 = str1.toLowerCase().split("");

  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    if (/[a-z0-9]/.test(val)) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
  }

  for (let val of arr2) {
    if (/[a-z0-9]/.test(val)) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram(" ", " "));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
