/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately,
and return as shown below.  Index 0 will be considered even.

Ex: 
capitalize("abcdef") = ['AbCdEf', 'aBcDeF']
*/

// my first attempt:
const altCap = s => 
  [s.split('').map((l, i) => 
    i === 0 || i % 2 === 0 ? l.toUpperCase() : l        
  ).join(''),
  s.split('').map((l, i) => 
    i !== 0 || i % 2 !== 0 ? l : l.toUpperCase()).join('')
  ]


// my verbose solution:
const altCap1 = (s) => {
  const output1 = [];
  const output2 = [];
  for (let i = 0; i < s.length; i++) {
      let temp = s[i];
      if (i === 0 || i % 2 === 0){
          output1.push(temp.toUpperCase());
          output2.push(temp);
      } else {
          output1.push(temp);
          output2.push(temp.toUpperCase());
      }
  }
  return [output1.join(''), output2.join('')];
}

console.log(altCap('asdfjkl'));
console.log(altCap1('qwertyuiop'));


// clever correct solution: 
const altCap2 = s => [0,1].map(l=>[...s].map((c,i)=>i%2===l?c.toUpperCase():c).join(''))
console.log(altCap2('zxcvbnm'));

// my first attempt corrected: 
const altCap3 = s => {
  const odd = s.split('').map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join('');
  const even = s.split('').map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join('');
  return [even, odd]
}

// or: 
const altCap4 = s => [
  s.split('').map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join(''),
  s.split('').map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join('')
]

console.log(altCap3('adasdfnas'));
console.log(altCap3('lkjboiuqewr'));
