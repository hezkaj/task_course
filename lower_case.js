/*
Напишите программу, которая 
соединяет 2 предложения в 1,
пример предложений:
"Мышка вильнула хвостиком" +
"Яичко покатилось"
*/

const firstStr = "Мышка вильнула хвостиком";
const secondStr = "Яичко покатилось";

const resultStr = firstStr.concat(", и ", secondStr.toLowerCase(), ".");

console.log(resultStr);