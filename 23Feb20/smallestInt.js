/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

// my first solution: 
const findSmallestInt = (args) => {
  if (args.length === 0) return;
  let smallestNum = args[0];
  args.forEach(num => num < smallestNum ? smallestNum = num : '')
  return smallestNum;
}

console.log(findSmallestInt([1112345,56474536,234566,7874675]));


// easy solution:
const findSmallestInt2 = args => Math.min(...args)

console.log(findSmallestInt2([1112345,56474536,234566,7874675]));


// using 'apply':
const findSmallestInt3 = (args) => {
  return Math.min.apply(null, args);
}

console.log(findSmallestInt2([1112345,56474536,234566,7874675]));


// super interesting way to reference an indices in an array that's had a method called on it:
const findSmallestInt4 = (args) => args.sort((a,b) => a - b)[0]

console.log(findSmallestInt2([1112345,56474536,234566,7874675]));
