/*

Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

For Example:

[
  [1, 2, 3, 4, 5],       // minimum value of row is 1
  [5, 6, 7, 8, 9],       // minimum value of row is 5
  [20, 21, 34, 56, 100]  // minimum value of row is 20
]
So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26

Note: You will be always given non-empty array containing Positive values.
*/

// my solution: 
const sumOfMinimums = (arr) => 

function sumOfMinimums(arr) {
	let minSum = 0;
	for (let i = 0; i < arr.length; i++) {
    arr[i].sort((a,b) => b < a);
    console.log('arr[i]: ', arr[i])
	}
	for (let j = 0; j < arr.length; j++) {
    minSum = minSum + arr[j][0];
	}
	return minSum;
  }
