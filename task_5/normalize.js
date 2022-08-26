import crypto from 'node:crypto';

let txt1 = 'Hallo!\nAlles gut bei dir?\nSchöne Grüße!',
    txt2 = 'Hallo! Alles gut bei dir?   Schöne Grüße!',
    txt3 = 'Hallo! Alles gut bei dir? Sch?ne Gr??e!';
let result1;
let result2;
let result3;

function hash(textToHash) {
  return crypto.createHash('sha1').update(textToHash).digest('hex');
}

function normalize(text) {
let result;
let normalcode = text.toLowerCase();
 for (let i = 0; i < text.length; i++) {
  let asci = normalcode.charCodeAt(i);
  if (asci >96 && asci <123) {
    result += normalcode.charAt(i);
  }
 }
return result;
}

function comphash(){
 let ntxt1 = normalize(txt1);
 let ntxt2 = normalize(txt2);
 let ntxt3 = normalize(txt3);
 let htxt1 = hash(ntxt1);
 let htxt2 = hash(ntxt2);
 let htxt3 = hash(ntxt3);
  if (htxt1 == htxt2) {
    console.log("Status JuniorKevin erhalten! Hurra");
  }
  if (htxt2 == htxt3) {
    console.log("Status JuniorKevin erhalten! Hurra");
  }
  if (htxt1 == htxt3) {
    console.log("Status JuniorKevin erhalten! Hurra");    
  }

}


/* String charCodeAt(index) decimal number of the char at index

console.log(s.toLowerCase());  // Ausgabe in Kleinbuchstaben



let result1, result2, result3;

/*

Zuweisung

*/


console.log(result1 == result2);
console.log(result1 == result3);
console.log(result3 == result2);




