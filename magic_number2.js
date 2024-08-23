/*
Загадайте цифру от 1 до 9,
припишите к ней ту же цифру,
вычтите 8, умножте на 2,
вычтите 6, умножте на 4,
разделите на 11,
прибавьте 8, разделите на 8,
вы получите свое загаданное число
*/
let num = 9;
const dubleNum = num;
num = num.toString() + num.toString();
num = ( Number(num) - 8 ) * 2;
num = ( num - 6 ) * 4;
num = num / 11;
num = ( num + 8 ) / 8;
console.log(num == dubleNum);
   