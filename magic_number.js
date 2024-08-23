/*
Загадайте число, умножте его на 4,
припишите 0, разделите на 5, умножте на 3,
припишите 0, разделите на 4, умножте на 2,
припишите 0, разделите на 3, разделите на 400,
в результате получиться загаданное число
*/
let num = 20;
const dubleNum = num;
num = num * 4;
num = num + "0";
num = Number(num) / 5;
num = num * 3;
num = num + "0";
num = Number(num) / 4;
num = num * 2;
num = num + "0";
num = Number(num) / 3;
num = num / 400;

if (num == dubleNum) console.log("Magic!");