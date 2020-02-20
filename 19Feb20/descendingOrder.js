/*
Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

// my solution: 
function descendingOrder(n){
	// create a new array of strings spread by index
	let nArr = [...String(n)];
	// the native .sort() method is least to greatest (UTF-16 unicode) so b -a reverses
	nArr.sort((a, b) => b - a);
	// recombine the array, convert to Number, and return the result
	return Number(nArr.join(''))
};

// my solution "golf'd":
const descOrd = n => Number([...String(n)].sort((a,b)=>b-a).join(''));

// using more built-in methods:
function descendingOrder2(n){
	return parseInt(String(n).split('').sort().reverse().join(''))
}

// interesting use of + to convert type:
function descendingOrder3(n){
  return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
}

// uses 'toString' which may be considered 'best practice' by some
function descendingOrder4(n){
  return parseInt(n.toString().split('').sort().reverse().join(''), 10);
}