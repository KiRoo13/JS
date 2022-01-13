"use strict" // Включаю строгий режим


for (let i = 0; i <= 10; i++) {       // Создаю цикл, инициализирую его, задаю условия выхода из цикла 
  if (i === 0) {
     console.log (i + " Это ноль")    //  Задаю условия, для вывода в консоль информации о числах, в зависимосли от чился 
  }
  else if (i % 2) {
   console.log (i + " Не четное")
  }
  else {console.log(i + " Четное")}
}



const post = {
   author: "John", //вывести этот текст
   postId: 23,
   comments: [
   {
   userId: 10,
   userName: "Alex",
   text: "lorem ipsum",
   rating: {
   likes: 10,
   dislikes: 2 //вывести это число
   }
   },
   {
   userId: 5, //вывести это число
   userName: "Jane",
   text: "lorem ipsum 2", //вывести этот текст
   rating: {
   likes: 3,
   dislikes: 1
   }
   },
   ]
   };
   console.log(post.author);  // Получаю доступ к значению ключа author массива post
   console.log(post.comments [0].rating.dislikes); // Получаю доступ к массиву post, далее к подмассиву comments по индексу [0] полусаем доступ к массиву с объектом rating и его свойству dislikes
   console.log(post.comments [1].userId);    // Получаю доступ к массиву post, далее к подмассиву comments по индексу [1] полусаем доступ к еще одному подмассиву и выводим id с помощю ключа userId
   console.log(post.comments [1].text);      // Получаю доступ к массиву post, далее к подмассиву comments по индексу [1] полусаем доступ к еще одному подмассиву и выводим текст с помощю ключа text



   const products = [
      {
      id: 3,
      price: 200,
      },
      {
      id: 4,
      price: 900,
      },
      {
      id: 1,
      price: 1000,
      },
      ];

products[0].price = 170;   
products[1].price = 765;
products[2].price = 850;
                              // Поменял знычения price с учетом скидки.  Не понял, как в методе forEach получить доступ к ключу price и с ним уже работать
console.log (products[0]);
console.log (products[1]);
console.log (products[2]);


const products1 = [
   {
   id: 3,
   price: 127,
   photos: [
   "1.jpg",
   "2.jpg",
   ]
   },
   {
   id: 5,
   price: 499,
   photos: []
   },
   {
   id: 10,
   price: 26,
   photos: [
   "3.jpg"
   ]
},
{
id: 8,
price: 78,
},
];


/*Создаю цикл, пробегаюсь по всему массиву  products1, нахожу все массивы с photos. 
  Не получилось вывести массивы, которые содержат флото, пустой массив с фото тоже выводиться.
  Подскажите, как решить, эту проблемму ? */


for (let index = 0; index < products1.length; index++) {  
if (products1[index].photos) {
      console.log (products1[index])
   }
}

/* Не получилось через свойство sort отсортировать у массива, только значение price. Не понимаю, что нужно написать, что бы работать,
   только с определенным свойством, как до него достучаться. Сортировался, весь массив, то есть обьъекты в нем, а не 1 свойство price */ 



   /* Создал новый массив res, через метод map вернул все значения price из массива products1, далее отсортировал эти значения,
   через метод sort, для тренировки все таки, этого метода */


let res = [] = products1.map(products1 => {return products1.price})  




res.sort(function(a, b){
   if (a < b) {
      return 1
   }
   if (a == b) {
      return 0
   }
   if (a > b) {
      return -1
   }
})

console.log (res)

/* Сделал приметивно, наверное не так нужно было сделать*/ 

for (let i = 0; i < 10; i++) {
  if (i == 0) {
     console.log("X")
  }
    if (i == 1) {
     console.log("XX")
  }
  if (i == 2) {
   console.log("XXX")
  }
  if (i == 2) {
   console.log("XXXX")
  }
  if (i == 4) {
   console.log("XXXXX")
  }
  if (i == 5) {
   console.log("XXXXXX")
  }
  if (i == 6) {
   console.log("XXXXXXX")
  }
  if (i == 7) {
   console.log("XXXXXXXX")
  }
  if (i == 8) {
   console.log("XXXXXXXXX")
  }
  if (i == 9) {
   console.log("XXXXXXXXXX")
  }
  if (i == 10) {
   console.log("XXXXXXXXXXX")
  }
}
