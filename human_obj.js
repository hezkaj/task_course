/*
Напишите программу, которая сообщит о человеке
по ориентировке: голубые глаза, от 20 до 30 лет,
мужчина
*/
const human = {
    colorEyes: "blue",
    age: 27,
    isMan: true
};

if (human.colorEyes == "blue" && human.age > 20 && human.age < 30 && human.isMan) {
    console.log("it's him!");
}