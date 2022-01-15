"use strict" // Включаю строгий режим



product.prototype.discount = function (one) {      // Создаю метод discount для объектов  созданных, через конструктор product. 
   let result = (one / 100) * 25;                  // Записываю метод в прототип конструктора product 
   let result2 = one - result;
   return result2;
}

function product (name, price) {        // Создаю коннструктор product на es5 синтаксисе, со значениями name и price
       this.name = name;                // Записываю их в свойства объекта, с помощью this 
       this.price = price;
}


let product1 = new product ("Банан","150");    // Создаю объект product1, задаю значения в свойства name и price
let product2 = new product ("Дыня","100");     // Создаю объект product2, задаю значения в свойства name и price

console.log (product1, product2)




class post {                                  // Создаю конструктор на es6 через ключевое слово slass
   constructor (autor, text, data) {          // Зависываю в конструктор свойства
      this.autor = autor;                     // Сохраняю их как свойства объктков, созданнх через конструктор post
      this.text = text;
      this.data = data;
   }
   edit (newText) {                              // Создаю метод edit, который автоматически записывается в прототип конструктора
      if (typeof newText === "string") {         // Сделал простейшую проверку
         this.text = newText
      }
      else if (typeof newText !== "string") {
         console.log ("Это не строка")
      }
   }
}

let man = new post ("Kirill", "Hello", new Date ())

console.log (man)




class AttachedPost extends post {                            // Создаю конструктор AttachedPost наслудую св-ва у post с помощью ключевого слова extend
   constructor (autor, text, data) {                         // С помощью super записываю в свойства объектов, св-ва наследуемые из post
       super (autor, text, data)                             // Добавляю доп св-во highlighted
       this.highlighted = false;                             // Так же, с наследованием свойств из post, наследуется и метод edit
   }
   makeTextHighlighted () {                                  // Создаю метод makeTextHighlighted в прототип конструктора AttachedPost
      this.highlighted = true;
   }
}

let man2 = new AttachedPost ("Devid", "Good", new Date())


console.log (man2)

/* Тема с объектами и наследованием зашла вообще, хотя гоаорили сложно. А вот с методами массивов, не очень, все эти переборы
   и обращение к кужным свойствам, не получаются, но думаю с опытом придет. Делал ДЗ, даже не знал, что есть видео с решением*/ 

