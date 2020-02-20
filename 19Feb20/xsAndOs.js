/*
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// my first solution doesn't work as they failed to 
// sufficiently explain edge case handling:  
function XO(str) {
    let xCnt = 0;
    let oCnt = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'x' || str[i] === 'X') {
        xCnt++;
      }
      if (str[i] === 'o' || str[i] === 'O') {
        oCnt++;
      }
    }
    console.log('str: ', str)
    console.log('xCnt: ', xCnt)
    console.log('oCnt: ', oCnt)
    return (xCnt >= oCnt);
}

// clever one-liner using regEx: 
const XO2 = (str) => !(str.split(/[oO]/).length - str.split(/[xX]/).length);

// highly enjoyed by others: 
function XO3(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

// simple one that doesn't rely on regEx:
function XO4(str) {
  var sum = 0;
  for(var i=0; i<str.length; i++){
    if(str[i].toLowerCase() == 'x') sum++;
    if(str[i].toLowerCase() == 'o') sum--;
  }
  return sum == 0;
}

// using built in filter method: 
const XO5 = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}