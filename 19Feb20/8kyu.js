// divide watermelon into two groups of even numbered size:
// mine: 
function divide(weight){
	return (weight % 2 === 0 && weight != 2);
}
// another way: 
function divide2(weight){
  return weight > 2 && !(weight % 2);
}

/*
*/

// squash the bugs: 
// my solution: 
function findLongest(str) {
  
  let spl = str.split(" ");
  let longest = 0
  
  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
    }
  }
  return longest;
}
// refactored by me: 
const findLongest2 = str => 
  [...str].reduce((longest, word, 0) => word > longest)