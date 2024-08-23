/*
Напишите программу - светофор,
которая будет проверять цвет и
выводить необходимое дорожное действие,
а также сам цвет
*/

const colorLight = "red";

if (colorLight == "red") {
    console.log("stop");
    console.log(colorLight);
} else if (colorLight == "yellow") {
    console.log("ready");
    console.log(colorLight);
} else if (colorLight == "green") {
    console.log("go");
    console.log(colorLight);
} else {
    console.log("it's not color of stoplight");
}