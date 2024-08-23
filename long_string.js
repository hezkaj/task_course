/*
Выведите "input" если количество
символов в строке не превышает 30, иначе
выведите на сколько длина превышает 
максимальное допустимое сообщение
*/
const longString = "This is a very long string, too long to be ok...";
if (longString.length < 30) console.log("input");
else console.log(longString.length - 30);

const normalString = "This is ok.";
if (normalString.length < 30) console.log("input");
else console.log(normalString.length - 30);

