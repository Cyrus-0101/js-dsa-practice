# Objectives:
1. Understand how `objects` and `arrays` work, through the lens of Big "O"
1. Explain why adding elements to the beginning of an array is costly.
1. Compare and contrast runtime for arrays and objects, as well as built-in methods.

## Objects in JavaScript.
* They are unordered data structures, and everything is stored with key value pairs.

	### When to use objects:
	1. When you don't need order.
	1. When you need fast access/insertion and removal.
	
	## Big "O" of Objects:
		- Insertion - O(1)
		- Removal - O(1)
		- Searching - O(n)
		- Access - O(1)

* When you do not need any ordering, objects are an excellent choice.

## Arrays in JavaScript.
* There is an intrinsic ordering to items in an array, at a cost.
* It is worth noting they are not the only ordered Data Structure in the world, its just what we get out-of-th-box.

	### When to use arrays.
	1. When you need order.
	1. When you need fast access/insertion and removal (sort of...).

	## Big "O" of Array:
		- Insertion - It depends...
		- Removal - It depends...
		- Searching - O(n)
		- Access - O(1)

		* What does this mean?

		- Inserting at the beginning is problematic since it messes up our indices, similarly with removing. Its good to be aware that its not as efficient as adding and removing from the end.
		
		- This means `push` and `pop` are always faster than `shift` and `unshift`, unless of course its an empty array.

	## Big "O" of Array Operations:
	- push - O(1)
	- pop - O(1)
	- shift - O(n)
	- unshift - O(n)
	- concat - O(n)
	- slice - O(n)
	- splice - O(n)
	- sort - O(n log n)
	- forEach/map/filter/reduce/etc. - O(n)

	


