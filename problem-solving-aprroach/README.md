# Objectives:
1. Define what an algorthm is.
1. Devise a plan to solve algorithms.
1. Compare and contrast problem solving patterns including: `Frequency Counters`, `Two pointer Problems` and `Divide and Conquer`.

## What is an Algorithm?
* Its a rocess of discrete steps to accomplish a certain task.

## How to understand problems? [Ref: George Polya](How to solve problems/) 
1. Can I restate the problem in my own words?
1. What are the inputs that go in to the problem?
1. What are the outputs that should come from the solution to the problem?
1. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
1. How should I label the important pieces of data that are a part of the problem?

## Problem Solving Patterns.
* In reality there are common approaches/programming mechanisms to help you face challenges, but not all:
1. Frequency Counter.
1. Multiple Pointers.
1. Sliding Window.
1. Divide and Conquer.
1. Dynamic Programming.
1. Greedy Algorithms.
1. Backtracking.
1. etc.

	### Frequency Counters - O(n).
	* Not an official terminology, but it is `a pattern that uses objects/sets to collect values/frequencies of values`. This can often avoid the need for nested loops or O(n²) operations with arrays/strings.

		#### Examples:
		1. Write a function called same which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency values must be the same.
		<!-- same([1,2,3], [4,1,9]) // true -->
		<!-- same([1,2,3], [4,9]) // false -->
		<!-- same([1,2,1], [4,1,4]) // false must be same frequency -->

		```javascript
			// O(n) time complexity:
			function same(arr1, arr2) {
				if (arr1.length !== arr2.length) {
					return false;
				}

				let frequencyCounter1 = {};
				let frequencyCounter2 = {};

				for (let val of arr1) {
					frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
				}

				for (let val of arr2) {
					frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
				}

				for (let key in frequencyCounter1) {
					if (!(key ** 2 in frequencyCounter2)) {
						return false;
					}

					if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
						return false;
					}
				}
				// console.log(frequencyCounter1);
				// console.log(frequencyCounter2);
				return true;
			}

			const arr1 = [1, 2, 3, 4, 5];
			const arr2 = [25, 4, 1, 9, 16];
			console.log(same(arr1, arr2));
		```

		1. Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another such as `cinema` to form `iceman`.
		<!-- validAnagram(" ", " ") // true -->
		<!-- validAnagram("aaz", "zza") //false -->
		<!-- validAnagram("anagram", "nagaram") // true -->
		<!-- validAnagram("rat", "car") // false -->
		<!-- validAnagram("awesome", "awesom") // false -->
		<!-- validAnagram("qeywrt", "qwerty") // true -->

		```javascript
			function validAnagram(first, second) {

				if (first.length !== second.length) {
					return false
				}

				const lookup = {};

				for(let i = 0; i< first.length; i++) {
					let letter = first[i];

					// If letter exists increament.
					lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
				}

				for(let i = 0; i< second.length; i++) {
					let letter = second[i];

					// If can't find letter or ltter is 0 then its not an anagram
					if (lookup[letter]) { lookup[letter] -= 1; }
				}
				return true;
			}


		```

