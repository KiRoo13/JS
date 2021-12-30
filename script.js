"use strict" // Включаю строгий режим

// ЗАДАНИЕ 1

let a = 1, b = 1, c, d;
c = ++a;
alert(c); // Унарный + увеличи значение переменной А на 1. В результате получиться 2 и это значение присвоиться переменной С


//пример 2

d = b++;
alert(d); // Инкремент в постфиксной форме, сначала запишет то, чему он равен в переменную D, а после увеличиться на 1

//пример 3

c = 2 + ++a;
alert(c); // Унарный + увеличи значение переменной А на 1. В результате получиться 3, так как А = 2, после первой операции. Соответственно С=5

//пример 4

d = 2 + b++;
alert(d); 
alert(a); 
alert(b); 

// ЗАДАНИЕ 2

let a = 2;
let x = 1 + (a *= 2); // Пернеменная А в скобках перезапишиться на 4 (2*2). Переменная Х из варажения будет равна 5

console.log(a, x) // 4  5

// ЗАДАНИЕ 3

let a = 8;
let b = -6;

if (a > 0 && b > 0) {
   alert( a - b)
} 
else if (a < 0 && b < 0) {
   alert (a * b)
}
else if (a < 0 && b > 0) {
   alert (a + b)
}
else if (a > 0 && b < 0) {
   alert (a + b)
}


// ЗАДАНИЕ 4

/**
 * Функция складывает два числа 
 * @param {number} one Первое число
 * @param {number} two Второе число
 */

function calcSum (one = 1, two = 1) {
   
   let sum = one + two;
   console.log (`Сумма ${sum}`);
}

calcSum (10, 5)


/**
 * Функция для диления двух чисел
 * @param {number} one Первое число
 * @param {number} two Второе число
 */

function calcDel (one = 1, two = 1) {
   
   let sum = one / two;
   console.log (`Деление ${sum}`);
}

calcDel (10, 5)


/**
 * Функция для вычитания двух чисел
 * @param {number} one Первое число
 * @param {number} two Второе число
 */

function calcMinus (one = 1, two = 1) {
   
   let sum = one - two;
   console.log (`Разность ${sum}`);
}

calcMinus (10, 5)


/**
 * Функция для умножения двух чисел
 * @param {number} one Первое число
 * @param {number} two Второе число
 */

function calcPro (one = 1, two = 1) {
   
   let sum = one * two;
   console.log (`Произведение ${sum}`);
}

calcPro (10 , 5)


// ЗАДАНИЕ 5  (не додумался, как сделать, чочнее не получилось. Но сделал угадайку)



alert ("Я загадал тебе машину, попробуй отгадать название!")


const varia = "Kia Rio";


while (vari != varia) {
   var vari = prompt("Угадай машину");

   if (vari != varia) {
      alert ("Попробуй еще раз")
   }
}

alert ("Молодец, угадал.")

