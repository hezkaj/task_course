/*
Уберите из строки все гласные буквы
*/

let str = "our string";

let skipIt = "qeuioa";

let newStr = "";

first: for (let i = 0; i < str.length; i++) {
    for (let e = 0; e < skipIt.length; e++) {
        if (str[i] == skipIt[e]) {
            continue first;
        }
    }
    newStr += str[i];
}
console.log(newStr);