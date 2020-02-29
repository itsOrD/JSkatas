/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, 
neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

// my solution:
const disemvowel = (str) => {
	let strCopy = [];
	for (let i = 0; i < str.length; i++) {
    let tempArr = []; tempArr[0] = str[i];
    if (!(tempArr.some(r => ['a','e','i','o','u','A','E','I','O','U'].includes(r)))) {
      strCopy.push(str[i]);
    }
	}
	return strCopy.join('');
}

console.log(disemvowel('Why hello there partner. Care to dance and drink juice? Or do you prefer milk?'));
console.log(disemvowel2('Why hello there partner. Care to dance and drink juice? Or do you prefer milk?'));
console.log(disemvowel3('Why hello there partner. Care to dance and drink juice? Or do you prefer milk?'));


  // useful stackoverflow: https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript/29447130
  // const found = arr1.some(r=> arr2.includes(r))


// clever solutions: 
function disemvowel2(str) {
  return (str || "").replace(/[aeiou]/gi, '');
}
//       g => test against 'all global entries' in given str --- i => flags for case-sensitivity

// USE FILTER
function disemvowel3(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}
