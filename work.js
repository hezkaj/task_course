/*
Напишите программу, которая дает
работу людям подходящего возраста
(учитывайте, что мужчины работают 
до 65, а женщины до 60)
*/

const age = 45;
const isMale = true;

if ((age <= 60 && age >= 18 && !isMale) || (age <= 65 && age >= 18 && isMale)) {
    console.log("get a work");
} 
console.log(age, isMale);