/* 
Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to milliseconds.

Example:
past(0, 1, 1) == 61000
*/

// my solution: 
const past = (h, m, s) => (h * 3600000) + (m * 60000) + (s * 1000)
//							or 3.6e+6
console.log(past(0, 1, 1));
console.log(past(36,20,43));

// clever solution: 
const past2 = (h, m, s) => ((h * 60 + m) * 60 + s) * 1000;
console.log(past2(0, 1, 1));
console.log(past2(36,20,43));
