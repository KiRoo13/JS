"use strict" // Включаю строгий режи

let one = document.getElementById('four');

let two = document.getElementsByClassName("one");

let three = document.querySelectorAll("div a");

let four = document.querySelectorAll(".progress");

let five = document.title

let six = document.querySelector(".mt-0");

let seven = document.querySelector('.test');

let seven2 = document.createElement("p");
    seven2.innerText = "hello world!"
    seven.appendChild(seven2);



let eight = document.querySelector(".btn-outline-warning ");
let eight2 = document.querySelector(".btn-outline-dark ");
let eight3 = document.getElementsByClassName("btn btn-outline-info")


eight.remove()
eight2.remove()


let nine = document.querySelector("ul");
    nine.classList.add("one");


let ten = document.querySelector(".nav-link");
    ten.classList.toggle("active");


let eleven = document.querySelector(".dropdown-menu");
    eleven.classList.remove("dropdown-menu");


let twelve = document.querySelector(".menu");
    twelve.insertAdjacentHTML("beforeend","p");


let thirteen = document.querySelector(".close");
let result = thirteen.getAttribute("data-dismiss");
let result2 = thirteen.getAttribute("aria-label");



let fourteen = document.querySelector("h1");
    fourteen.setAttribute("data-one","один");
    fourteen.setAttribute("data-two","два");


let fifteen = document.querySelector("#title")
    fifteen.setAttribute("id","33")

// document.addEventListener("DOMContentLoaded", function (event){
//         alert ("Все теги загруженны");
// });

// window.addEventListener("load" , function (event) {
//     alert ("Вся страница загруженна");
// });


let sixteen = document.querySelector(".btnn")
    sixteen.addEventListener("click", function(event) {
        alert ("Клик");
    });


let seventeen = document.querySelector("textarea")
    seventeen.addEventListener("mouseover", function (event) {
        console.log ("Навели на textarea");
    });



console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);    
console.log(six.parentNode);
console.log(seven);
console.log(eight3);
console.log(nine);
console.log(ten);
console.log(eleven);
console.log(twelve);
console.log(result, result2);
console.log(fourteen);
console.log(fifteen);
console.log(sixteen);
console.log(seventeen);



// ЗАДАНИЯ ВТОРОГО УРОВНЯ   ЗАДАНИЯ ВТОРОГО УРОВНЯ   ЗАДАНИЯ ВТОРОГО УРОВНЯ   ЗАДАНИЯ ВТОРОГО УРОВНЯ   ЗАДАНИЯ ВТОРОГО УРОВНЯ


let img = document.querySelectorAll("img")  // вывожу картинки, которые уже есть на странице, не те что в примере

for (let i = 0; i < img.length; i++) {
    console.log(img[i]);
};


let teg = document.getElementsByClassName("one1");


let title = document.getElementsByTagName("h2");
for (let i = 0; i < title.length; i++) {
    console.log(title[i].className);
};


let block = document.querySelector("section");
let list = block.classList;

   list.forEach(function (Element) {
         console.log(Element);
   });


let check = document.querySelector(".product");
let check2 = check.classList.contains("hidden");

let card = document.querySelectorAll(".card3");
let card2 = check.classList.contains("hidden");
    // card.classList.remove("hidden")   Правильно написанно, но удалять не хочет 
    

let addet = document.querySelectorAll("b");
//  addet.classList.toggle("sign");

let btn = document.querySelectorAll("#one");






console.log(check2);
console.log(card2);
console.log();
