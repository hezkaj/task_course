/*
Дана ориентировка на человека которого нужно найти:
    hairColor: "brown",
    weight: "slim",
    hairLong: "short",
    eyesColor: "green",
    height: "high"
Мимо вас проходит человек с такими характеристиками:
    hairLong: "short",
    eyes: 1,
    weight: "slim",
    height: "high",
    haveBodyPrint: "dragon"
Если совпадений с ориентировкой больше 3, закричите "it's him!"
*/

const target = {
    hairColor: "brown",
    weight: "slim",
    hairLong: "short",
    eyesColor: "green",
    height: "high"
}

const human = {
    hairLong: "short",
    eyes: 1,
    weight: "slim",
    height: "high",
    haveBodyPrint: "dragon"
}

const keyList = ["hairColor", "weight", "height", "hairLong", "eyesColor"];

let count = 0;
for (let key of keyList) {
    if (target[key] && human[key] && target[key] == human[key]) count++;
}
if (count >= 3) console.log("it's him!", count);