import crypto from 'node:crypto';

let txt1 = 'Hallo!\nAlles gut bei dir?\nSchöne Grüße!',
    txt2 = 'Hallo! Alles gut bei dir?   Schöne Grüße!',
    txt3 = 'Hallo! Alles gut bei dir? Sch?ne Gr??e!';


function hash(textToHash) {
  return crypto.createHash('sha1').update(textToHash).digest('hex');
}

function normalize(text) {
 
}




// String charCodeAt(index) decimal number of the char at index

console.log(s.toLowerCase());  // Ausgabe in Kleinbuchstaben



let result1, result2, result3;

/*

Zuweisung

*/


console.log(result1 == result2);
console.log(result1 == result3);
console.log(result3 == result2);




