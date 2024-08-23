/*
Найдите все простые числа из списка:
11, 45, 67, 34, 13, 89, 30
*/

const integers = [11, 45, 67, 34, 13, 89, 30];

first: for (let int of integers) {
    for (let i = 2; i < int; i++) {
        if (int % i == 0) continue first;
    }
    console.log(int);
}