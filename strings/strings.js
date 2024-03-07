// extracting last four characters from a single string "extravanganza"

let text  = "extravaganza";
let result = text.substring(8,0);
console.log({result});


//inseting string at the fouth index of variable;"eat"cont food="The quick fox jumped over the lazy dog"

  const food = "The quick fox jumped over the lazy dog";
  const string = food.slice(0,4) + "eat" + food.slice(4);
console.log({string});

//count how many times the following string appears in the string variable;1 "the" 2 "brown"
//const story="The quick brown fox jumps over the lazy dog"
const story = "The quick fox jumps over the lazy dog";
console.log((story.match(/the/g)).length);
console.log((story.match(/brown/g)).length);

//find the words from the the following strings;1 "are"const string1="The pupils are reading in the library"
//2 sitting on the table before it fell

let stringa = "The puils are reading in the library";
let   substringa = "are";
console.log(stringa.includes(substringa))

let stringb = "The child was sitting on the table before it fell";
let substringb ="sitting";
console.log(stringa.includes(substringb))


//convert strings in to specified format;1upper case;"wonderful"2lowercase;"amazing" "underneath"3Title case"Awonderful world
 text ="wonderful"
 FileSystem.out.printlin(text.toUpperCase(wonderful))













