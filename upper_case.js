/*
напишите программу, которая 
определяет есть ли в строке ! 
и если есть меняет буквы в  
строке на заглавные
*/

let str = "Hello!";

if (str.includes("!")) {
    str = str.toUpperCase();
}

console.log(str);