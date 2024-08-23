/*
Когда пользователи вводят пароль на сайте,
они иногда ставят лишние пробелы вначале или вконце,
проверьте верность пароля, не учитывая лишние пробелы
*/

const userPassword = "  qwe123 ";
if (userPassword.trim() == "qwe123") {
    console.log("Accepted");
} else {
    console.log("Wrong password");
}