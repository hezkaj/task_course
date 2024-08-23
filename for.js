/*
Напишите программу, которая 
поставит пробел после каждой 
буквы в слове
*/

const word = "string";
let newWord = "";

for (let i = 0; i < word.length; i ++) {
    newWord += word[i] + " ";
}

console.log(newWord);