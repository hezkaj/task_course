/*
Возводите число 2 в квадрат,
пока его длина не превысит 10 символов,
и тогда выведите его
*/

let two = 2;

while (true) {
    two = two * two;
    if (two.toString().length > 10) {
        break;
    }
}

console.log(two);