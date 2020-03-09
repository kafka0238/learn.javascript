"use strict";
let age = prompt("Ваш возвраст");
if(age >= 14 && age <= 90) {
    alert(true);
}
if(!(age >= 14) || !(age <= 90)) {
    alert(true);
}
if(age <= 14 || age >= 90) {
    alert(true);
}

let login = prompt('Login', 'Админ');
if(login === 'Админ') {
    let pass = prompt('Password', 'Я главный');
    if (pass === 'Я главный') {
        alert('Здравствуйте!')
    } else if (pass === '' || pass === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (login === '' || login === null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}
