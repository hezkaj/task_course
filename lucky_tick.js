/*
Выведите lucky , если номер билета 
окажется счастливым. Номер билета состоит
из 6 цифр и считается счастливым, если
сумма 3 цифр слева и справа равны друг другу
*/

const tick = "652733";
const leftSum = Number(tick[0]) + Number(tick[1]) + Number(tick[2]);
const rightSum = Number(tick[3]) + Number(tick[4]) + Number(tick[5]);
if (leftSum == rightSum) console.log("lucky");