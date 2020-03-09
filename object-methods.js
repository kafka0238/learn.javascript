"use strict";
/*
Создайте калькулятор
важность: 5
Создайте объект calculator (калькулятор) с тремя методами:

    read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
    sum() (суммировать) возвращает сумму сохранённых значений.
    mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/
let calculator = {
  read() {
      this.val1 = +prompt('Введите значение 1');
      this.val2 = +prompt('Введите значение 2');
  },
  sum() {
      return this.val1 + this.val2;
  },
  mul() {
      return this.val1 * this.val2;
  }
};
