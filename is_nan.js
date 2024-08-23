/*
Напишите код, который будет проверять
можно ли преобразовать строку в число
*/

const num = "0.5";

if(isNaN(Number(num))) console.log("is not a number");
else console.log(Number(num));
