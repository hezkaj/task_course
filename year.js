/*
Напишите программу, которая определяет
время года по порядковому номеру месяца
*/

const monthNumber = 1;

if (monthNumber == 1 || monthNumber == 2 || monthNumber == 12) {
    console.log("winter");
} else if (monthNumber == 3 || monthNumber == 4 || monthNumber == 5) {
    console.log("spring");
} else if (monthNumber == 6 || monthNumber == 7 || monthNumber == 8) {
    console.log("summer");
} else if (monthNumber == 9 || monthNumber == 10 || monthNumber == 11) {
    console.log("outumn");
} else {
    console.log("wrong number");
}