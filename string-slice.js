const sentence = 'a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses.';
// split 
const words = sentence.split(' ');
console.log(words);
// slice using only index number 
const first20Cherecters = sentence.slice(0, 21);
console.log(first20Cherecters);
// substr start with index number and end eith charecter numbers 
const first20CherectersWithSubSrt = sentence.substr(0, 20);
console.log(first20CherectersWithSubSrt);

const words2 = words.join('=====');
console.log(words2);