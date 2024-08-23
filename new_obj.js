/*
Создайте объект, у которого будет число.
Дайте ему число на свое усмотрение.
Проверьте: если число объекта меньше 10, то
дайте объекту строку с этим числом, иначе дайте 
объекту булиеву переменую с этим числом (должно получиться true).
Посмотрите какой объект у вас получился
*/

const object = new Object();
object.number = 14;

if (object.number < 10) {
    object.string = (object.number).toString();
} else {
    object.bool = Boolean(object.number);
}

console.log(object);
