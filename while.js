/*
Найдите первое число, которое
будет соотвестстовать условиям:
при вычитании из него 11 делиться 8
при вычитании из него 8 делиться на 11
*/

let i = 1;

while ( (i - 11) % 8 != 0 || (i - 8) % 11 != 0 ) {
    i ++;
}

console.log(i);
