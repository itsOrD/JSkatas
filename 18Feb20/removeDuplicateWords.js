/*
Your task is to remove all duplicate words from a string, 
leaving only single (first) words entries.

Example:

Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:
'alpha beta gamma delta'
*/

const removeDup = (str) => {
  let strArr = s.split(' ');
  let tracker = new Set();
  let newStr = '';
  for (let i = 0; i < strArr.length; i++) {
    tracker.add(strArr[i])
  };
  let newArr = [...tracker];
  newStr = newArr[0];
  for (let j = 1; j < newArr.length; j++) {
    newStr = newStr + ' ' + newArr[j];
  }
  return newStr;
};

// console.log(removeDup());

// better solution from s borne:
function removeDuplicateWords (s) {
  return [...new Set(s.split(' '))].join(' ')
}

// interesting method use (Array.from):
function removeDuplicateWords (s) 
{
    return Array.from(new Set(s.split(' '))).join(' ');
}

// utilizing reducer:
const results3 = words.reduce((acc, currentValue) => {
  if (!acc.includes(currentValue)) {
    acc.push(currentValue);
  }
  return acc;
}, []);
console.log('results3', results3.join(' '));
return results.join(' ');


// single liner:
removeDupdWords = (s) => [...new Set(s.split(' '))].join(' ');